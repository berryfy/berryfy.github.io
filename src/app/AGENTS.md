# App Router 규칙

- 라우트 파일은 thin wrapper다. 화면은 `src/features`에서 import한다.
- metadata의 사이트 URL·이름·canonical 경로는 전역 상수에서 가져온다.
- 레이아웃마다 `lang`과 언어별 글꼴 변수(`siteFontVariables`·`monoFontVariable`·`displayFontVariable`)를 정확히 넣는다. 글꼴 설정은 `fonts.ts`에서만 바꾼다.
- 내부 경로는 모두 `/`로 끝낸다.
