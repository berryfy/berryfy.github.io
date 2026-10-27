# 브랜드 실험실 규칙

- 디자인 시스템 확인과 브랜드 후보 비교용 내부 전용 화면이다. 공개 사이트 기능에서 import하지 않는다.
- 라우트는 `src/app/(lab)/lab/**/page.dev.tsx`로 두며 `pnpm dev`에서만 열리고 `pnpm build` 결과물에는 포함되지 않는다.
- 표시용 목록은 `constants/`, 화면은 `components/`에 둔다. 토큰 값은 `src/app/globals.css`에서만 읽고 여기서 다시 선언하지 않는다. 확정되지 않은 후보는 결정 후 정리한다.
