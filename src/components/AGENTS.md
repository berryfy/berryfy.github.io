# 공용 컴포넌트 규칙

| 폴더 | 두는 것 | 예 |
|---|---|---|
| `atoms/` | 다른 컴포넌트를 import하지 않는 단일 요소 | `Button` · `Badge` · `Wordmark` |
| `widgets/` | atoms를 조합하거나 상태·브라우저 API·라우팅을 쓰는 부품 | `SiteHeader` · `LanguageSwitcher` · `ThemeToggle` · `SiteDocument` |

- 파일명 = 컴포넌트명(PascalCase), 1파일 1컴포넌트 default export, 화살표 함수.
- 기능 문구·비즈니스 데이터에 의존하지 않는다. 문구는 props로 받는다.
- variant·size는 문자열 union 타입과 클래스 맵으로 정의하고 토큰 클래스만 쓴다.
- 링크 모양 버튼은 `Button`의 `href`(내부 경로) · `external`(새 탭)로 만든다.
- 페이지 헤더는 `widgets/SiteHeader`, 언어 전환은 `widgets/LanguageSwitcher`, 테마는 `widgets/ThemeProvider`·`widgets/ThemeToggle` 하나씩만 쓴다.
- 새 컴포넌트는 `/lab/design-system/`에 예시를 추가하고 `docs/design-system.md` 표를 갱신한다.
