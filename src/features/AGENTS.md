# Feature 모듈 규칙

- 구조는 `features/<feature>/components|constants|types|utils/*`를 따른다.
- 기능 내부에서만 쓰는 상수·타입·유틸리티는 해당 feature 안에 둔다.
- 다른 feature의 내부 파일을 직접 import하지 않는다. 공용이면 전역 계층으로 이동한다.
- 컴포넌트에 반복 데이터·URL·라우트 ID를 인라인하지 않는다.
- 화면 문구와 데이터는 컴포넌트에서 분리하되, 단 한 번 쓰는 표현까지 과도하게 추출하지 않는다.
