# Legal 기능 규칙

## 구조와 경로

- 앱별 개인정보 처리방침의 사실 데이터는 `constants/<app>-privacy.ts`, 언어별 정책·경로 매핑은 `constants/<app>-privacy-copy.ts`에서 관리한다.
- 사업자 정보는 `src/constants/business.ts`, 공용 라우트는 `src/constants/site.ts`, 외부 정책 URL은 `constants/privacy-links.ts`를 참조한다.
- 앱명·시행일·처리 항목을 컴포넌트나 route metadata에 중복 하드코딩하지 않는다.
- 모든 앱은 `/apps/<app-name>/privacy/`를 영문 기본 경로로 사용하고 `/en/`, `/ko/`, `/ja/`를 함께 정적 생성한다.
- EYECONS Stan의 기존 `/apps/eyecons/privacy/` 경로는 호환용으로 보존한다. 새 앱에 별도 레거시 경로를 만들지 않는다.
- route 파일은 공용 `PrivacyPolicyPage`와 metadata 유틸리티를 연결하는 thin wrapper로 유지한다.

## 사실 확인과 공통 정책 재사용

- 정책 작성 전 실제 출시 프로젝트의 앱명, flavor, package ID, 기능과 외부 서비스를 확인한다.
- 레거시 Stan 앱의 기준은 `project-centum/kpop_tube_legarcy/AGENTS.md`의 flavor 표, `kpop_tube/env/<flavor>.json`, `kpop_tube/android/app/build.gradle.kts`와 현재 Google Play 등록 정보다.
- 출시되지 않은 `project-centum/kpop_tube`나 추측한 package ID를 근거로 사용하지 않는다.
- 동일한 레거시 멀티-flavor 코드와 기능을 사용하는 Stan 앱만 공통 정책 데이터를 재사용한다. 앱별 기능이나 외부 서비스가 다르면 해당 앱 상수에서 사실에 맞게 분리한다.
- 새 앱을 추가할 때 앱별 규칙 문장을 이 파일에 계속 나열하지 않는다. 앱별 이름·시행일·경로는 코드 상수, package ID·flavor는 출시 프로젝트를 단일 원천으로 유지한다.

## 내용 정확성

- 한국어·영어·일본어의 사실관계, 이용자 권리와 운영자 보호 범위를 동일하게 동기화한다.
- 실제 앱 동작과 확인된 외부 서비스만 기재하고 추정, 미출시 기능, 사용하지 않는 인프라, 불필요한 package ID 설명을 본문에 넣지 않는다.
- 운영자에게 허용되는 보관·요청 제한 범위는 실제 처리 목적과 법령상 허용 범위 안에서 명확하게 작성한다. 과도한 면책이나 효력을 단정하는 표현은 금지한다.
- 처리 항목이나 외부 서비스가 바뀌면 데이터, 세 언어 본문, metadata와 시행일을 함께 검토한다.
- 시행일은 실제 공개일 또는 정책 적용 예정일을 사용하며 기존 앱의 날짜를 복사하지 않는다.
- 개인정보 처리방침은 출시 전 운영자가 최종 검토한다.

## 검증

- 기본·`/en/`·`/ko/`·`/ja/` 네 경로의 정적 HTML 생성, 앱명, 언어별 제목·시행일, canonical과 language alternate를 확인한다.
- 모바일과 태블릿에서 sticky header, 언어 전환, 긴 표·링크의 반응형 표시를 확인한다.
- 배포 후 네 공개 URL이 HTTP 200이고 올바른 앱 정책을 표시하는지 확인한다.
