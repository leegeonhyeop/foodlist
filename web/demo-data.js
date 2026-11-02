// 데모 데이터 — config.js에 Supabase 정보가 없을 때만 사용
// 원본: docs/dummy/supabase/seed.sql (자동 생성 파일이므로 직접 고치지 말 것)
window.DEMO_DATA = {
  "products": [
    {
      "product_id": "P-0113",
      "name": "대구사과칩",
      "size": "60g",
      "price": 4900,
      "description": "팔공산 사과 100%를 저온에서 말린 과자. 설탕·첨가물 없음"
    },
    {
      "product_id": "P-0127",
      "name": "팔공산 꿀사과",
      "size": "2kg(7~9개)",
      "price": 18000,
      "description": "팔공산 해발 400m 과수원의 부사. 당도 14Brix 이상 선별"
    },
    {
      "product_id": "P-0205",
      "name": "성주 참외",
      "size": "1.5kg(5~6개)",
      "price": 12000,
      "description": "성주 하우스 참외 특품"
    },
    {
      "product_id": "P-0207",
      "name": "참외청",
      "size": "350ml",
      "price": 9500,
      "description": "성주 참외와 비정제 원당을 1:1로 재운 청"
    },
    {
      "product_id": "P-0305",
      "name": "청도 반건시",
      "size": "500g(10개)",
      "price": 15000,
      "description": "청도 감을 20일 자연 건조한 반건시. 겉은 쫀득, 속은 촉촉"
    },
    {
      "product_id": "P-0312",
      "name": "의성 마늘",
      "size": "1kg(약 15통)",
      "price": 11000,
      "description": "의성 한지형 마늘. 알이 단단하고 매운맛이 강함"
    },
    {
      "product_id": "P-0318",
      "name": "흑마늘 진액",
      "size": "70ml × 30포",
      "price": 24000,
      "description": "의성 마늘을 15일 숙성한 흑마늘 추출액"
    },
    {
      "product_id": "P-0402",
      "name": "서문시장 납작만두",
      "size": "20개(500g)",
      "price": 7900,
      "description": "서문시장식 납작만두. 당면·부추 소, 간장 양념 포함"
    },
    {
      "product_id": "P-0410",
      "name": "달성 토마토",
      "size": "1kg(6~8개)",
      "price": 8500,
      "description": "달성군 하빈면 완숙 토마토. 산도가 낮아 생식용"
    },
    {
      "product_id": "P-0421",
      "name": "경산 대추칩",
      "size": "50g",
      "price": 5500,
      "description": "경산 대추를 씨 빼고 말린 칩"
    }
  ],
  "info_items": [
    {
      "item_code": "origin",
      "label": "원산지",
      "description": "재배·생산 지역",
      "sort_order": 1
    },
    {
      "item_code": "ingredients",
      "label": "원재료",
      "description": "들어간 재료",
      "sort_order": 2
    },
    {
      "item_code": "storage_method",
      "label": "보관방법",
      "description": "보관 장소와 기간",
      "sort_order": 3
    },
    {
      "item_code": "shelf_life_unopened",
      "label": "개봉전_유통기한",
      "description": "개봉하지 않았을 때의 유통기한",
      "sort_order": 4
    },
    {
      "item_code": "shelf_life_opened",
      "label": "개봉후_보관기간",
      "description": "개봉한 뒤 먹어야 하는 기간",
      "sort_order": 5
    },
    {
      "item_code": "storage_warning",
      "label": "보관주의",
      "description": "보관할 때 하면 안 되는 것 · 주의할 것",
      "sort_order": 6
    },
    {
      "item_code": "allergens",
      "label": "알레르기_유발물질",
      "description": "원재료에 들어 있는 알레르기 유발 물질 (문서에 '없음'으로 적힌 경우 포함)",
      "sort_order": 7
    },
    {
      "item_code": "allergy_warning",
      "label": "알레르기_주의",
      "description": "생산 라인 공유 등 원재료 외 알레르기 주의",
      "sort_order": 8
    },
    {
      "item_code": "serving_guide",
      "label": "섭취안내",
      "description": "먹는 법 · 조리법 · 권장 섭취량",
      "sort_order": 9
    },
    {
      "item_code": "consumption_warning",
      "label": "섭취주의",
      "description": "섭취 전에 주의할 대상이나 상황",
      "sort_order": 10
    },
    {
      "item_code": "sales_period",
      "label": "판매기간",
      "description": "한정 판매 기간",
      "sort_order": 11
    },
    {
      "item_code": "features",
      "label": "상품특징",
      "description": "그 밖의 상품 특징",
      "sort_order": 12
    }
  ],
  "product_info": [
    {
      "product_id": "P-0113",
      "item_code": "origin",
      "content": "대구 팔공산"
    },
    {
      "product_id": "P-0113",
      "item_code": "ingredients",
      "content": "사과 100%"
    },
    {
      "product_id": "P-0113",
      "item_code": "storage_method",
      "content": "개봉 후 밀봉해 서늘한 곳"
    },
    {
      "product_id": "P-0113",
      "item_code": "shelf_life_unopened",
      "content": "6개월"
    },
    {
      "product_id": "P-0113",
      "item_code": "shelf_life_opened",
      "content": "7일"
    },
    {
      "product_id": "P-0113",
      "item_code": "storage_warning",
      "content": "냉장 금지 — 습기를 먹어 눅눅해짐"
    },
    {
      "product_id": "P-0113",
      "item_code": "allergy_warning",
      "content": "견과류 생산 라인 공유 — 견과류 알레르기 주의"
    },
    {
      "product_id": "P-0113",
      "item_code": "features",
      "content": "글루텐 없음"
    },
    {
      "product_id": "P-0127",
      "item_code": "origin",
      "content": "대구 팔공산"
    },
    {
      "product_id": "P-0127",
      "item_code": "ingredients",
      "content": "사과(부사)"
    },
    {
      "product_id": "P-0127",
      "item_code": "storage_method",
      "content": "냉장 3주 / 상온 7일"
    },
    {
      "product_id": "P-0127",
      "item_code": "storage_warning",
      "content": "다른 과일과 함께 두지 않기 — 에틸렌으로 다른 과일이 빨리 익음"
    },
    {
      "product_id": "P-0127",
      "item_code": "allergens",
      "content": "없음"
    },
    {
      "product_id": "P-0127",
      "item_code": "features",
      "content": "표면 왁스 코팅 없음"
    },
    {
      "product_id": "P-0205",
      "item_code": "origin",
      "content": "경북 성주"
    },
    {
      "product_id": "P-0205",
      "item_code": "ingredients",
      "content": "참외"
    },
    {
      "product_id": "P-0205",
      "item_code": "storage_method",
      "content": "냉장 5일"
    },
    {
      "product_id": "P-0205",
      "item_code": "storage_warning",
      "content": "꼭지가 마르면 당도가 떨어짐 — 받은 날부터 3일 안에 섭취 권장"
    },
    {
      "product_id": "P-0205",
      "item_code": "allergens",
      "content": "없음"
    },
    {
      "product_id": "P-0205",
      "item_code": "sales_period",
      "content": "4~7월 한정"
    },
    {
      "product_id": "P-0207",
      "item_code": "origin",
      "content": "경북 성주"
    },
    {
      "product_id": "P-0207",
      "item_code": "ingredients",
      "content": "참외(경북 성주), 비정제 원당(국내산)"
    },
    {
      "product_id": "P-0207",
      "item_code": "storage_method",
      "content": "개봉 전 상온 / 개봉 후 냉장"
    },
    {
      "product_id": "P-0207",
      "item_code": "shelf_life_unopened",
      "content": "12개월"
    },
    {
      "product_id": "P-0207",
      "item_code": "shelf_life_opened",
      "content": "30일"
    },
    {
      "product_id": "P-0207",
      "item_code": "storage_warning",
      "content": "금속 숟가락 사용 금지 — 발효가 빨라짐. 나무·플라스틱 사용"
    },
    {
      "product_id": "P-0207",
      "item_code": "allergens",
      "content": "없음"
    },
    {
      "product_id": "P-0207",
      "item_code": "serving_guide",
      "content": "탄산수 희석 비율 1:4"
    },
    {
      "product_id": "P-0305",
      "item_code": "origin",
      "content": "경북 청도"
    },
    {
      "product_id": "P-0305",
      "item_code": "ingredients",
      "content": "감"
    },
    {
      "product_id": "P-0305",
      "item_code": "storage_method",
      "content": "받은 즉시 냉장, 냉장 10일"
    },
    {
      "product_id": "P-0305",
      "item_code": "storage_warning",
      "content": "냉동 보관 금지 — 해동하면 수분이 빠져 질겨짐"
    },
    {
      "product_id": "P-0305",
      "item_code": "allergens",
      "content": "없음"
    },
    {
      "product_id": "P-0305",
      "item_code": "features",
      "content": "표면의 흰 가루는 당분이 굳은 것으로 정상"
    },
    {
      "product_id": "P-0312",
      "item_code": "origin",
      "content": "경북 의성"
    },
    {
      "product_id": "P-0312",
      "item_code": "ingredients",
      "content": "마늘(한지형)"
    },
    {
      "product_id": "P-0312",
      "item_code": "storage_method",
      "content": "통풍이 잘 되는 그늘에 망에 담아 상온 2개월"
    },
    {
      "product_id": "P-0312",
      "item_code": "storage_warning",
      "content": "비닐봉지 밀봉 시 곰팡이 발생, 냉장 보관 시 싹이 남"
    },
    {
      "product_id": "P-0312",
      "item_code": "allergens",
      "content": "없음"
    },
    {
      "product_id": "P-0318",
      "item_code": "origin",
      "content": "경북 의성"
    },
    {
      "product_id": "P-0318",
      "item_code": "ingredients",
      "content": "흑마늘(경북 의성), 정제수"
    },
    {
      "product_id": "P-0318",
      "item_code": "storage_method",
      "content": "상온 보관, 여름철에는 냉장 권장"
    },
    {
      "product_id": "P-0318",
      "item_code": "shelf_life_unopened",
      "content": "18개월"
    },
    {
      "product_id": "P-0318",
      "item_code": "shelf_life_opened",
      "content": "당일(개봉한 포)"
    },
    {
      "product_id": "P-0318",
      "item_code": "allergens",
      "content": "없음"
    },
    {
      "product_id": "P-0318",
      "item_code": "serving_guide",
      "content": "하루 1포 권장"
    },
    {
      "product_id": "P-0318",
      "item_code": "consumption_warning",
      "content": "임산부·수술 전후는 섭취 전 전문가 상담"
    },
    {
      "product_id": "P-0402",
      "item_code": "ingredients",
      "content": "밀가루, 당면, 부추, 대두(간장)"
    },
    {
      "product_id": "P-0402",
      "item_code": "storage_method",
      "content": "냉동 보관"
    },
    {
      "product_id": "P-0402",
      "item_code": "shelf_life_unopened",
      "content": "3개월"
    },
    {
      "product_id": "P-0402",
      "item_code": "storage_warning",
      "content": "전자레인지 조리 금지 — 피가 질겨짐"
    },
    {
      "product_id": "P-0402",
      "item_code": "allergens",
      "content": "밀, 대두"
    },
    {
      "product_id": "P-0402",
      "item_code": "allergy_warning",
      "content": "제조 라인에서 계란 사용"
    },
    {
      "product_id": "P-0402",
      "item_code": "serving_guide",
      "content": "해동하지 말고 냉동 상태로 팬에 기름 두르고 중불 3분"
    },
    {
      "product_id": "P-0410",
      "item_code": "origin",
      "content": "대구 달성"
    },
    {
      "product_id": "P-0410",
      "item_code": "ingredients",
      "content": "토마토"
    },
    {
      "product_id": "P-0410",
      "item_code": "storage_method",
      "content": "실온 3일 / 냉장 7일"
    },
    {
      "product_id": "P-0410",
      "item_code": "storage_warning",
      "content": "꼭지를 아래로 두고 보관 — 수분 증발을 줄임"
    },
    {
      "product_id": "P-0410",
      "item_code": "allergens",
      "content": "없음"
    },
    {
      "product_id": "P-0410",
      "item_code": "serving_guide",
      "content": "냉장 후 먹기 30분 전 꺼내면 맛이 돌아옴"
    },
    {
      "product_id": "P-0421",
      "item_code": "origin",
      "content": "경북 경산"
    },
    {
      "product_id": "P-0421",
      "item_code": "ingredients",
      "content": "대추 100%"
    },
    {
      "product_id": "P-0421",
      "item_code": "storage_method",
      "content": "개봉 후 밀봉해 상온"
    },
    {
      "product_id": "P-0421",
      "item_code": "shelf_life_opened",
      "content": "14일"
    },
    {
      "product_id": "P-0421",
      "item_code": "storage_warning",
      "content": "습기에 약함 — 실리카겔을 버리지 않기"
    },
    {
      "product_id": "P-0421",
      "item_code": "allergy_warning",
      "content": "견과류 생산 라인 공유 — 견과류 알레르기 주의"
    },
    {
      "product_id": "P-0421",
      "item_code": "serving_guide",
      "content": "차로 우려도 됨(80℃ 물 300ml에 5조각)"
    }
  ],
  "shipping_policy": [
    {
      "free_shipping_min": 30000,
      "base_shipping_fee": 2500,
      "same_day_regions": [
        "수성구",
        "달서구"
      ],
      "same_day_cutoff": "14:00",
      "fresh_ship_days": "월~목"
    }
  ]
};
