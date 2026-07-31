# src 공통 규칙

- 의존 방향은 `app → features → components/constants/lib/types`를 기본으로 한다.
- `constants`, `components`, `lib`, `types`는 `features`나 `app`을 import하지 않는다.
- 기능 간 직접 의존이 생기면 실제 공용 개념인지 확인한 뒤 전역 계층으로 승격한다.
- `@/` 절대 경로 import를 사용한다.
- 사용자 표시 문구는 하드코딩을 흩뿌리지 말고 해당 기능 콘텐츠 파일에서 관리한다.
- 공개 저장소이므로 어떤 소스 파일에도 시크릿을 넣지 않는다.
