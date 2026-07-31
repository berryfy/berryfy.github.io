# Home 기능 규칙

- 영어·한국어·일본어 콘텐츠의 키 구조를 항상 동일하게 유지한다.
- 지원 언어와 경로는 `src/constants/site.ts`, 번역 콘텐츠는 `constants/site-content.ts`에서 관리한다.
- 섹션 anchor와 공통 비주얼 라벨은 `constants/sections.ts`를 단일 출처로 사용한다.
- 브랜드명·앱명·`Play`, `Focus`, `Create` 같은 자연스러운 제품 라벨은 억지로 번역하지 않는다.
- 번역투보다 각 언어 사용자가 실제로 읽기 자연스러운 문장을 우선한다.
- 앱 이미지가 추가되면 기존 `data-image-slot`과 반응형 레이아웃을 유지하며 교체한다.
