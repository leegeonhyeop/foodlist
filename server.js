// 상품 정보 웹페이지 서버
// 실행: docs/dummy 폴더에서  node server.js   →  http://localhost:5179
//
// - web/ 폴더의 파일을 제공한다
// - 같은 폴더의 .env를 읽어 /config.js를 만들어 준다
//   브라우저에는 SUPABASE_URL, SUPABASE_ANON_KEY만 전달하고
//   SUPABASE_SERVICE_ROLE_KEY는 절대 전달하지 않는다
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "web");
const ENV_FILE = path.join(__dirname, ".env");
const PORT = Number(process.env.PORT || 5179);
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8" };

// .env 읽기 (KEY=값 형식, # 주석 무시). 요청마다 다시 읽으므로 값을 바꾼 뒤 새로고침만 하면 된다
function readEnv() {
  const env = {};
  if (!fs.existsSync(ENV_FILE)) return env;
  for (const line of fs.readFileSync(ENV_FILE, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!m) continue;
    env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, "$2"); // 따옴표로 감싼 값 허용
  }
  return env;
}

// 브라우저에 보낼 설정 — 공개해도 되는 값만 고른다
function publicConfigJs() {
  const env = readEnv();
  const pub = { SUPABASE_URL: env.SUPABASE_URL || "", SUPABASE_ANON_KEY: env.SUPABASE_ANON_KEY || "" };
  return `// server.js가 .env에서 만든 설정 (공개 값만 포함)\nwindow.APP_CONFIG = ${JSON.stringify(pub, null, 2)};\n`;
}

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);

  if (urlPath === "/config.js") {
    res.writeHead(200, { "Content-Type": TYPES[".js"], "Cache-Control": "no-store" });
    return res.end(publicConfigJs());
  }

  const file = path.join(ROOT, urlPath === "/" ? "index.html" : urlPath);
  if (!file.startsWith(ROOT + path.sep)) { res.writeHead(403); return res.end("forbidden"); } // web/ 밖 접근 차단
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404); return res.end("not found"); }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(buf);
  });
}).listen(PORT, "127.0.0.1", () => {
  const env = readEnv();
  console.log(`상품 정보 페이지: http://localhost:${PORT}`);
  console.log(env.SUPABASE_URL && env.SUPABASE_ANON_KEY ? "Supabase 설정 읽음 (.env)" : ".env에 Supabase 설정이 없어 예시 데이터로 동작합니다");
  if (env.SUPABASE_SERVICE_ROLE_KEY) console.log("service_role 키는 읽었지만 브라우저에는 전달하지 않습니다");
});
