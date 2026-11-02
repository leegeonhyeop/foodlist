-- 알레르기 주의가 필요한 상품 조회 (조회 전용, 데이터를 바꾸지 않음)
-- 실행 전 schema.sql → seed.sql 이 먼저 실행되어 있어야 함
--
-- "알레르기가 있는 상품" 기준: 아래 둘 중 하나라도 해당
--   1) 알레르기_유발물질(allergens)이 '없음'이 아님 → 원재료에 들어 있음
--   2) 알레르기_주의(allergy_warning)가 있음      → 생산 라인 공유 등
--
-- '미확인'으로 적힌 값은 정보가 없는 것으로 보고 제외한다
--   (앞뒤 공백 무시, '미확인(공급사 회신 대기)'처럼 '미확인'으로 시작하는 값도 제외)


-- [1] 알레르기 주의 상품 전체
--     '미확인' 값은 조인 단계에서 걸러서 빈칸(null)으로 취급
select
  p.product_id                       as 상품코드,
  p.name                             as 상품명,
  a.content                          as 알레르기_유발물질,
  w.content                          as 알레르기_주의
from products p
left join product_info a
  on a.product_id = p.product_id
 and a.item_code = 'allergens'
 and trim(a.content) not like '미확인%'
left join product_info w
  on w.product_id = p.product_id
 and w.item_code = 'allergy_warning'
 and trim(w.content) not like '미확인%'
where (a.content is not null and trim(a.content) <> '없음')
   or w.content is not null
order by p.product_id;


-- [2] 특정 알레르기 성분으로 찾기 — 아래 '견과류'를 원하는 성분으로 바꿔서 실행 (예: 밀, 대두, 계란)
select
  p.product_id                       as 상품코드,
  p.name                             as 상품명,
  i.label                            as 구분,
  pi.content                         as 내용
from product_info pi
join products p   on p.product_id = pi.product_id
join info_items i on i.item_code = pi.item_code
where pi.item_code in ('allergens', 'allergy_warning')
  and trim(pi.content) not like '미확인%'
  and pi.content like '%' || '견과류' || '%'
order by p.product_id, i.sort_order;
