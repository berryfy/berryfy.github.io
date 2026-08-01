# 공용 컴포넌트 규칙

- 둘 이상의 기능에서 재사용하는 컴포넌트만 둔다.
- 기능 문구·비즈니스 로직·기능 전용 데이터에 의존하지 않는다.
- 1 파일 = 1 default export 컴포넌트를 유지한다.
- 접근 가능한 이름, 키보드 focus, semantic HTML을 기본 제공한다.
- 디자인 토큰과 Tailwind 유틸리티를 우선하며 임의 색상은 브랜드 표현에 필요한 경우만 사용한다.
- 언어 선택 UI는 `language-switcher.tsx` 하나만 사용하고, 각 기능은 언어별 경로만 전달한다.
- 공통 페이지 헤더는 `site-header.tsx`를 사용한다. 기능별 내비게이션이나 메뉴는 `navigation`·`actions` 슬롯으로만 주입한다.
- 전역 테마는 `theme-provider.tsx`, 테마 전환 UI는 `theme-toggle.tsx`만 사용한다. 페이지별 테마 상태를 만들지 않는다.
