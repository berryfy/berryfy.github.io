# Berryfy

Berryfy 공식 웹사이트입니다. Next.js App Router로 작성하고 정적 export 결과물을 GitHub Pages에 배포합니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 검증

```bash
npm run lint
npm run build
```

`npm run build`가 생성하는 `out/` 디렉토리를 GitHub Actions가 `https://berryfy.github.io/`에 배포합니다.
