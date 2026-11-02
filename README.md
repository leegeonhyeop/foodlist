# foodlist

대구·경북 특산물 **가상 상품 10건**을 Supabase로 관리하고, 웹페이지에서 검색·조회하는 실습 프로젝트입니다.

> 상품명 · 가격 · 정책은 모두 가상 데이터입니다.

## 폴더 구성

| 경로 | 내용 |
|---|---|
| `products/` | 상품 문서 10건 (원본 자료, Markdown) |
| `products_db.xlsx` | 상품 DB 엑셀 — 상품 / 상품정보 / 항목목록 / 배송정책 시트 |
| `supabase/schema.sql` | 테이블 · 뷰 · 보안 정책(RLS) |
| `supabase/seed.sql` | 상품 데이터 |
| `supabase/query_allergy_products.sql` | 알레르기 주의 상품 조회 |
| `web/` | 상품 검색·조회 웹페이지 |
| `server.js` | 웹페이지 서버 (`.env`의 공개 값만 브라우저에 전달) |
| `.env.example` | Supabase 연결 정보 견본 |

## DB 구조

- `products` — 모든 상품에 있는 기본정보 (상품코드, 상품명, 용량, 가격, 설명)
- `product_info` — 상품마다 다른 정보를 한 줄씩 (상품코드 · 항목 · 내용)
- `info_items` — `product_info`에 쓸 수 있는 항목 목록
- `shipping_policy` — 전 상품 공통 배송정책 (1행)
- `product_overview` — 상품별 정보를 한 줄로 모아 보는 뷰

## 시작하기

### 1. Supabase에 테이블과 데이터 만들기

Supabase 대시보드 → SQL Editor에서 순서대로 실행합니다.

1. `supabase/schema.sql`
2. `supabase/seed.sql`

두 파일 모두 기존 데이터를 지우지 않습니다. 이미 실행했다면 오류만 나고 아무것도 바뀌지 않습니다.

### 2. 연결 정보 설정

`.env.example`을 복사해 `.env`로 저장하고 값을 채웁니다.
(Supabase 대시보드 → Project Settings → API)

```
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

- `.env`는 `.gitignore`로 제외되어 저장소에 올라가지 않습니다.
- `service_role` 키는 브라우저에 전달되지 않습니다. 관리용 서버 코드에서만 사용합니다.

### 3. 웹페이지 실행

```bash
node server.js
```

브라우저에서 http://localhost:5179 접속. `.env`가 비어 있으면 예시 데이터(`web/demo-data.js`)로 동작합니다.

### 4. 인터넷에 공개 (GitHub Pages)

`main`에 push하면 `.github/workflows/pages.yml`이 `web/` 폴더를 자동 배포합니다.
주소: https://leegeonhyeop.github.io/foodlist/

- 처음 한 번: 저장소 Settings → Pages → Source를 **GitHub Actions**로 선택
- Supabase 연결: Settings → Secrets and variables → Actions → **Variables**에 `SUPABASE_URL`, `SUPABASE_ANON_KEY` 등록 후 Actions 탭에서 다시 실행
- `service_role` 키는 등록하지 않습니다

## 웹페이지 기능

- 상품명 · 원산지 · 보관법 등 모든 정보에서 검색 (항목 지정 검색 가능)
- 알레르기 성분(견과류 · 밀 · 대두 · 계란) 제외 필터, 알레르기 주의 상품만 보기
- 가격 · 이름 정렬, 상품 상세 보기, 배송정책 표시
