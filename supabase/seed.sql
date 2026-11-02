-- [2/2] 시드: 가상 상품 데이터 (실습 전용)
-- 원본: docs/dummy/products_db.xlsx
-- 실행 순서: schema.sql을 먼저 실행한 뒤 이 파일을 실행
-- 데이터가 이미 들어 있으면 중복 오류가 나고,
-- 전체가 하나의 트랜잭션이라 아무것도 바뀌거나 지워지지 않는다

begin;

-- 항목목록 (상품정보보다 먼저 넣어야 함)
insert into info_items (item_code, label, description, sort_order) values
  ('origin', '원산지', '재배·생산 지역', 1),
  ('ingredients', '원재료', '들어간 재료', 2),
  ('storage_method', '보관방법', '보관 장소와 기간', 3),
  ('shelf_life_unopened', '개봉전_유통기한', '개봉하지 않았을 때의 유통기한', 4),
  ('shelf_life_opened', '개봉후_보관기간', '개봉한 뒤 먹어야 하는 기간', 5),
  ('storage_warning', '보관주의', '보관할 때 하면 안 되는 것 · 주의할 것', 6),
  ('allergens', '알레르기_유발물질', '원재료에 들어 있는 알레르기 유발 물질 (문서에 ''없음''으로 적힌 경우 포함)', 7),
  ('allergy_warning', '알레르기_주의', '생산 라인 공유 등 원재료 외 알레르기 주의', 8),
  ('serving_guide', '섭취안내', '먹는 법 · 조리법 · 권장 섭취량', 9),
  ('consumption_warning', '섭취주의', '섭취 전에 주의할 대상이나 상황', 10),
  ('sales_period', '판매기간', '한정 판매 기간', 11),
  ('features', '상품특징', '그 밖의 상품 특징', 12);

-- 상품
insert into products (product_id, name, size, price, description) values
  ('P-0113', '대구사과칩', '60g', 4900, '팔공산 사과 100%를 저온에서 말린 과자. 설탕·첨가물 없음'),
  ('P-0127', '팔공산 꿀사과', '2kg(7~9개)', 18000, '팔공산 해발 400m 과수원의 부사. 당도 14Brix 이상 선별'),
  ('P-0205', '성주 참외', '1.5kg(5~6개)', 12000, '성주 하우스 참외 특품'),
  ('P-0207', '참외청', '350ml', 9500, '성주 참외와 비정제 원당을 1:1로 재운 청'),
  ('P-0305', '청도 반건시', '500g(10개)', 15000, '청도 감을 20일 자연 건조한 반건시. 겉은 쫀득, 속은 촉촉'),
  ('P-0312', '의성 마늘', '1kg(약 15통)', 11000, '의성 한지형 마늘. 알이 단단하고 매운맛이 강함'),
  ('P-0318', '흑마늘 진액', '70ml × 30포', 24000, '의성 마늘을 15일 숙성한 흑마늘 추출액'),
  ('P-0402', '서문시장 납작만두', '20개(500g)', 7900, '서문시장식 납작만두. 당면·부추 소, 간장 양념 포함'),
  ('P-0410', '달성 토마토', '1kg(6~8개)', 8500, '달성군 하빈면 완숙 토마토. 산도가 낮아 생식용'),
  ('P-0421', '경산 대추칩', '50g', 5500, '경산 대추를 씨 빼고 말린 칩');

-- 상품정보
insert into product_info (product_id, item_code, content) values
  ('P-0113', 'origin', '대구 팔공산'),
  ('P-0113', 'ingredients', '사과 100%'),
  ('P-0113', 'storage_method', '개봉 후 밀봉해 서늘한 곳'),
  ('P-0113', 'shelf_life_unopened', '6개월'),
  ('P-0113', 'shelf_life_opened', '7일'),
  ('P-0113', 'storage_warning', '냉장 금지 — 습기를 먹어 눅눅해짐'),
  ('P-0113', 'allergy_warning', '견과류 생산 라인 공유 — 견과류 알레르기 주의'),
  ('P-0113', 'features', '글루텐 없음'),
  ('P-0127', 'origin', '대구 팔공산'),
  ('P-0127', 'ingredients', '사과(부사)'),
  ('P-0127', 'storage_method', '냉장 3주 / 상온 7일'),
  ('P-0127', 'storage_warning', '다른 과일과 함께 두지 않기 — 에틸렌으로 다른 과일이 빨리 익음'),
  ('P-0127', 'allergens', '없음'),
  ('P-0127', 'features', '표면 왁스 코팅 없음'),
  ('P-0205', 'origin', '경북 성주'),
  ('P-0205', 'ingredients', '참외'),
  ('P-0205', 'storage_method', '냉장 5일'),
  ('P-0205', 'storage_warning', '꼭지가 마르면 당도가 떨어짐 — 받은 날부터 3일 안에 섭취 권장'),
  ('P-0205', 'allergens', '없음'),
  ('P-0205', 'sales_period', '4~7월 한정'),
  ('P-0207', 'origin', '경북 성주'),
  ('P-0207', 'ingredients', '참외(경북 성주), 비정제 원당(국내산)'),
  ('P-0207', 'storage_method', '개봉 전 상온 / 개봉 후 냉장'),
  ('P-0207', 'shelf_life_unopened', '12개월'),
  ('P-0207', 'shelf_life_opened', '30일'),
  ('P-0207', 'storage_warning', '금속 숟가락 사용 금지 — 발효가 빨라짐. 나무·플라스틱 사용'),
  ('P-0207', 'allergens', '없음'),
  ('P-0207', 'serving_guide', '탄산수 희석 비율 1:4'),
  ('P-0305', 'origin', '경북 청도'),
  ('P-0305', 'ingredients', '감'),
  ('P-0305', 'storage_method', '받은 즉시 냉장, 냉장 10일'),
  ('P-0305', 'storage_warning', '냉동 보관 금지 — 해동하면 수분이 빠져 질겨짐'),
  ('P-0305', 'allergens', '없음'),
  ('P-0305', 'features', '표면의 흰 가루는 당분이 굳은 것으로 정상'),
  ('P-0312', 'origin', '경북 의성'),
  ('P-0312', 'ingredients', '마늘(한지형)'),
  ('P-0312', 'storage_method', '통풍이 잘 되는 그늘에 망에 담아 상온 2개월'),
  ('P-0312', 'storage_warning', '비닐봉지 밀봉 시 곰팡이 발생, 냉장 보관 시 싹이 남'),
  ('P-0312', 'allergens', '없음'),
  ('P-0318', 'origin', '경북 의성'),
  ('P-0318', 'ingredients', '흑마늘(경북 의성), 정제수'),
  ('P-0318', 'storage_method', '상온 보관, 여름철에는 냉장 권장'),
  ('P-0318', 'shelf_life_unopened', '18개월'),
  ('P-0318', 'shelf_life_opened', '당일(개봉한 포)'),
  ('P-0318', 'allergens', '없음'),
  ('P-0318', 'serving_guide', '하루 1포 권장'),
  ('P-0318', 'consumption_warning', '임산부·수술 전후는 섭취 전 전문가 상담'),
  ('P-0402', 'ingredients', '밀가루, 당면, 부추, 대두(간장)'),
  ('P-0402', 'storage_method', '냉동 보관'),
  ('P-0402', 'shelf_life_unopened', '3개월'),
  ('P-0402', 'storage_warning', '전자레인지 조리 금지 — 피가 질겨짐'),
  ('P-0402', 'allergens', '밀, 대두'),
  ('P-0402', 'allergy_warning', '제조 라인에서 계란 사용'),
  ('P-0402', 'serving_guide', '해동하지 말고 냉동 상태로 팬에 기름 두르고 중불 3분'),
  ('P-0410', 'origin', '대구 달성'),
  ('P-0410', 'ingredients', '토마토'),
  ('P-0410', 'storage_method', '실온 3일 / 냉장 7일'),
  ('P-0410', 'storage_warning', '꼭지를 아래로 두고 보관 — 수분 증발을 줄임'),
  ('P-0410', 'allergens', '없음'),
  ('P-0410', 'serving_guide', '냉장 후 먹기 30분 전 꺼내면 맛이 돌아옴'),
  ('P-0421', 'origin', '경북 경산'),
  ('P-0421', 'ingredients', '대추 100%'),
  ('P-0421', 'storage_method', '개봉 후 밀봉해 상온'),
  ('P-0421', 'shelf_life_opened', '14일'),
  ('P-0421', 'storage_warning', '습기에 약함 — 실리카겔을 버리지 않기'),
  ('P-0421', 'allergy_warning', '견과류 생산 라인 공유 — 견과류 알레르기 주의'),
  ('P-0421', 'serving_guide', '차로 우려도 됨(80℃ 물 300ml에 5조각)');

-- 배송정책
insert into shipping_policy (free_shipping_min, base_shipping_fee, same_day_regions, same_day_cutoff, fresh_ship_days) values
  (30000, 2500, array['수성구', '달서구'], '14:00', '월~목');

commit;

-- 확인용 (따로 실행):
-- select count(*) from products;       -- 10
-- select count(*) from product_info;   -- 67
-- select count(*) from info_items;     -- 12
-- select * from product_overview where product_id = 'P-0113';
