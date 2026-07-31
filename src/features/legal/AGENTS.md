# Legal 기능 규칙

- 앱별 개인정보 처리방침의 사실 데이터는 `constants/<app>-privacy.ts`에서 관리한다.
- 사업자 정보는 `src/constants/business.ts`, 외부 정책 URL은 `constants/privacy-links.ts`를 참조한다.
- 앱명·시행일·처리 항목을 컴포넌트나 route metadata에 중복 하드코딩하지 않는다.
- URL 패턴은 `/apps/<app-name>/privacy/`를 사용한다.
- 실제 앱 동작과 확인된 외부 서비스만 기재한다. 추정이나 과장된 법률 표현을 추가하지 않는다.
- 처리 항목이나 외부 서비스가 바뀌면 데이터, 본문, 메타데이터, 시행일을 함께 검토한다.
- 법적 효력을 단정하지 않으며 출시 전 운영자가 최종 검토한다.
- EYEKONS Stan의 출시본 사실은 `project-centum/kpop_tube_legarcy/kpop_tube`를 기준으로 확인한다. 출시되지 않은 `project-centum/kpop_tube`는 개인정보 처리방침의 근거로 사용하지 않는다.
