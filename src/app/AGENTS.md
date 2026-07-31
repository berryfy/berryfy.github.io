# App Router 규칙

- 라우트 파일은 thin wrapper다. 화면 구현은 `src/features`에서 import한다.
- 메타데이터의 사이트 URL·이름·canonical 경로는 전역 상수에서 가져온다.
- 동적 segment는 모든 값을 `generateStaticParams`로 생성하고 `dynamicParams = false`를 유지한다.
- GitHub Pages 호환을 위해 모든 내부 경로는 trailing slash 정책과 정적 export를 지킨다.
- 레이아웃별 `lang`과 언어별 폰트를 정확히 유지한다.
- 공용 폰트 설정은 `src/app/fonts.ts`에서만 변경한다.
- 새 Next.js API를 사용하기 전 현재 설치 버전의 `node_modules/next/dist/docs/` 문서를 읽는다.
