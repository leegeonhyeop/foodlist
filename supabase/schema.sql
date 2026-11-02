-- [1/2] 스키마: 테이블 · 뷰 · 보안 정책 (데이터 없음)
-- 가상 상품 DB (실습 전용) — Supabase SQL Editor에 붙여 넣고 Run
-- 실행 순서: schema.sql → seed.sql
-- 처음 한 번만 실행한다. 테이블이 이미 있으면 오류가 나고,
-- 전체가 하나의 트랜잭션이라 아무것도 바뀌거나 지워지지 않는다

begin;

-- 수정 시각 자동 갱신
create or replace function set_updated_at() returns trigger
language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 1) 상품: 모든 상품에 반드시 있는 정보
create table products (
  product_id  text primary key check (product_id ~ '^P-[0-9]{4}$'),
  name        text not null,
  size        text not null,                       -- 문서 표기 그대로 (예: 2kg(7~9개))
  price       integer not null check (price >= 0), -- 원
  description text not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
comment on table products is '상품 기본정보 (엑셀 상품 시트)';

-- 2) 항목목록: product_info.item_code에 쓸 수 있는 값
create table info_items (
  item_code   text primary key,
  label       text not null unique,   -- 화면에 보일 한글 이름
  description text,
  sort_order  integer not null
);
comment on table info_items is '상품정보 항목 목록 (엑셀 항목목록 시트)';

-- 3) 상품정보: 상품마다 다른 정보를 한 줄씩 (있는 정보만)
create table product_info (
  id          bigint generated always as identity primary key,
  product_id  text not null references products(product_id) on update cascade on delete cascade,
  item_code   text not null references info_items(item_code) on update cascade,
  content     text not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (product_id, item_code)       -- 같은 상품에 같은 항목은 한 번만
);
create index product_info_item_code_idx on product_info(item_code);
comment on table product_info is '상품별 상세정보, 세로형 (엑셀 상품정보 시트)';

-- 4) 배송정책: 전 상품 공통, 1행만 존재
create table shipping_policy (
  id                     integer primary key default 1 check (id = 1),
  free_shipping_min      integer not null,  -- 무료배송 기준금액(원)
  base_shipping_fee      integer not null,  -- 기본 배송비(원)
  same_day_regions       text[]  not null,  -- 당일배송 지역
  same_day_cutoff        time    not null,  -- 당일배송 주문 마감
  fresh_ship_days        text    not null,  -- 신선식품 발송요일
  updated_at             timestamptz not null default now()
);
comment on table shipping_policy is '배송정책 (엑셀 배송정책 시트)';

create trigger products_updated_at before update on products
  for each row execute function set_updated_at();
create trigger product_info_updated_at before update on product_info
  for each row execute function set_updated_at();
create trigger shipping_policy_updated_at before update on shipping_policy
  for each row execute function set_updated_at();

-- 상품 하나의 정보를 한눈에 보는 뷰 (엑셀의 가로형 표와 같은 모양)
create view product_overview with (security_invoker = true) as
select
  p.product_id, p.name, p.size, p.price, p.description,
  jsonb_object_agg(i.label, pi.content order by i.sort_order)
    filter (where pi.id is not null) as info
from products p
left join product_info pi on pi.product_id = p.product_id
left join info_items i on i.item_code = pi.item_code
group by p.product_id;

-- 보안(RLS): 누구나 읽기만 가능. 추가·수정·삭제는 Supabase 대시보드나 service_role 키로만
alter table products        enable row level security;
alter table info_items      enable row level security;
alter table product_info    enable row level security;
alter table shipping_policy enable row level security;

create policy "누구나 읽기" on products        for select to anon, authenticated using (true);
create policy "누구나 읽기" on info_items      for select to anon, authenticated using (true);
create policy "누구나 읽기" on product_info    for select to anon, authenticated using (true);
create policy "누구나 읽기" on shipping_policy for select to anon, authenticated using (true);

commit;
