# Berryfy

Berryfy 공식 웹사이트입니다. Next.js App Router로 작성하고 정적 export 결과물을 GitHub Pages에 배포합니다.

## 로컬 실행

```bash
pnpm install
pnpm dev
```

## 검증

```bash
pnpm format:check
pnpm lint
pnpm build
pnpm typecheck
pnpm verify:legacy-routes
pnpm verify:potion-privacy
```

`pnpm build`가 생성하는 `out/` 디렉토리를 GitHub Actions가 `https://berryfy.github.io/`에 배포합니다.

## 경로와 정책 데이터

- 공개 경로는 `src/constants/site.ts`의 `localizedRoutes`에서 언어별 `paths`, 영어 호환 주소(`englishAlias`), 검색 노출 여부(`indexable`)를 정의합니다. 사이트맵은 이 정의에서 생성하며, 기존 `siteConfig.routes` 키는 호환 참조로 유지합니다.
- 동일한 레거시 Stan 앱의 공통 정책 데이터는 `src/features/legal/constants/legacy-stan-privacy-{en,ko,ja}.ts`에서 관리합니다. 앱별 정책은 공통 데이터에 앱명·시행일·예외를 명시하며, 특정 앱의 정책을 공통 원본으로 사용하지 않습니다.
- GitHub Actions는 포맷·lint·빌드·타입 검사와 정적 산출물 검증이 성공한 경우에만 배포합니다.
