<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# berryfy.github.io 공통 규칙

## 프로젝트 성격

- Next.js App Router + TypeScript + Tailwind CSS + shadcn/ui 기반의 정적 사이트다.
- `output: "export"`와 `trailingSlash: true`를 유지하며 GitHub Pages에 배포한다.
- 패키지 매니저는 pnpm만 사용한다.
- 공개 저장소다. API 키, 토큰, 실제 `.env`, 내부 URL 등 비공개 정보를 절대 커밋하지 않는다.

## 구조

- `src/app`: 라우트와 메타데이터를 연결하는 얇은 계층.
- `src/features/<feature>`: 기능별 컴포넌트·상수·타입·유틸리티.
- `src/components`: 둘 이상의 기능에서 재사용하는 공용 컴포넌트와 UI primitive.
- `src/constants`: 사이트 전체에서 공유하는 변경 불가능한 설정과 식별자.
- `src/lib`: 기능에 종속되지 않은 순수 유틸리티.
- `src/types`: 사이트 전체에서 공유하는 타입.
- 기능 전용 코드를 전역 디렉토리로 올리지 않는다.
- 기능 간 컴포넌트 직접 import를 피한다. 공용이면 `src/components`로 승격한다.

## 상수와 콘텐츠

- 사업자명·이메일은 `src/constants/business.ts`만 수정한다.
- 사이트명·도메인·플랫폼·기본 언어·공용 라우트·로케일 정보는 `src/constants/site.ts`만 수정한다.
- 기능 안에서 반복되는 ID·외부 링크·공통 라벨은 해당 기능의 `constants/`로 분리한다.
- 번역 문장, 한 번만 쓰는 문구, Tailwind class 문자열까지 기계적으로 상수화하지 않는다.
- 상수 객체는 가능하면 `as const`와 `satisfies`로 타입을 보존한다.

## 구현

- 1 파일 = 1 default export 컴포넌트를 원칙으로 한다. 짧은 private 보조 컴포넌트만 예외다.
- Server Component를 기본으로 하고 상호작용이 필요한 경계만 `"use client"`를 사용한다.
- 정적 내보내기에서 지원하지 않는 서버 기능, 동적 라우트, 기본 이미지 최적화를 도입하지 않는다.
- 한국어·영어·일본어를 함께 유지한다. 브랜드명·앱명·자연스러운 영어 UI 라벨은 억지로 번역하지 않는다.
- 사용자에게 내부 개발 목표나 구현 세부를 제품 문구로 노출하지 않는다.

## 검증과 Git

- 마무리 전 `pnpm prettier --write .`, `pnpm lint`, `pnpm typecheck`, `pnpm build`를 실행한다.
- 의미 단위로 작게 커밋하고 `main`에 꾸준히 push한다.
- Conventional Commits와 한국어 설명을 사용하며 `Co-Authored-By`는 추가하지 않는다.
- 로컬 Git 설정은 `user.name=berryfy`, `user.email=public.berryfy@gmail.com`이며 global 설정은 변경하지 않는다.
