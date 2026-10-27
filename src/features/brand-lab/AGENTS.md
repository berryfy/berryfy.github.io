# 브랜드 실험실 규칙

- 브랜드 색·글꼴·로고 후보를 비교하는 내부 전용 화면이다. 공개 사이트 기능에서 import하지 않는다.
- 라우트는 `src/app/(lab)/lab/**/page.dev.tsx`로 두며 `pnpm dev`에서만 열리고 `pnpm build` 결과물에는 포함되지 않는다.
- 후보 데이터는 `constants/`, 화면은 `components/`에 둔다. 확정된 값은 전역 디자인 토큰으로 옮기고 실험 후보는 정리한다.
