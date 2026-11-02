// Supabase 연결 정보
//
// [권장] docs/dummy/.env 에 값을 넣고  node server.js  로 실행
//   → 서버가 이 파일 대신 .env의 URL·anon 키로 설정을 만들어 준다 (이 파일 내용은 무시됨)
//
// [서버 없이 index.html을 더블클릭해서 열 때만] 아래에 직접 넣는다
//  - SUPABASE_URL      : Project URL (예: https://abcdefgh.supabase.co)
//  - SUPABASE_ANON_KEY : anon public 키
//  - service_role 키는 여기에 절대 넣지 말 것 (페이지 소스로 누구나 볼 수 있음)
// 둘 다 비워 두면 demo-data.js의 예시 데이터로 동작한다
window.APP_CONFIG = {
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: "",
};
