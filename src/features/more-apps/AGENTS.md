# 다른 앱 페이지 규칙

- Google Play에서 실제 공개된 berryfy 앱만 노출한다. 출시 전 앱이나 확인되지 않은 링크를 추가하지 않는다.
- 앱 목록·아이콘·스토어 URL은 `constants/more-apps.ts`, 페이지 문구는 `constants/more-apps-copy.ts`에서 관리한다.
- 기본 URL은 영어이며 `/ko/`, `/ja/` 번역 경로와 `/en/` 호환 경로를 유지한다.
- 앱 내 WebView 사용을 우선하며 모바일 한 열 리스트, 충분한 터치 영역, 가벼운 에셋을 유지한다.
- Google Play 링크는 현재 WebView에서 이동할 수 있는 일반 HTTPS 링크로 제공한다.
