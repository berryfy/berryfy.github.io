<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# berryfy.github.io 규칙

## 프로젝트

- Next.js App Router + TypeScript + Tailwind CSS v4 정적 사이트다. `output: "export"`·`trailingSlash: true`로 GitHub Pages에 배포한다.
- 정적 export가 지원하지 않는 서버 기능·동적 라우트·기본 이미지 최적화를 쓰지 않는다. 동적 segment는 `generateStaticParams` + `dynamicParams = false`.
- 패키지 매니저는 pnpm만 쓴다.
- 공개 저장소다. API 키·토큰·실제 `.env`·내부 URL을 커밋하지 않는다. `public/`의 모든 파일은 그대로 공개된다.
- 영어(기본)·한국어·일본어를 함께 유지하고 브랜드명·앱명은 번역하지 않는다.
- 모든 공개 페이지 metadata는 canonical·언어 대체 경로와 `createSocialMetadata`(OG·X 카드)를 넣는다. `sitemap.xml`은 `site.ts` 라우트에서 만들므로 새 페이지 경로는 `…Ko`·`…Ja` 짝과 함께 `site.ts`에 추가한다.

## 구조

- 의존 방향: `app → features → components/constants/lib/types`. 하위 계층은 상위 계층을 import하지 않고 `@/` 절대 경로를 쓴다.
- `src/app`: 라우트·metadata만 연결하는 얇은 계층. `*.dev.tsx` 라우트는 `pnpm dev` 전용이고 빌드에서 빠진다.
- `src/features/<기능>`: `components|constants|types|utils`. 기능 전용 코드는 전역으로 올리지 않고, 다른 기능의 내부 파일을 import하지 않는다.
- `src/components`: 둘 이상의 기능에서 쓰는 자체 컴포넌트(`atoms`·`widgets`). 규칙은 `src/components/AGENTS.md`.
- `src/constants`: 사업자명·이메일은 `business.ts`, 사이트명·도메인·라우트·로케일은 `site.ts`만 수정한다. 상수는 `as const`·`satisfies`.
- `src/lib`: 기능과 무관한 순수 함수. `src/types`: 둘 이상의 기능이 공유하는 타입.
- 화면 문구는 기능의 `constants/`에서 관리하되, 한 번만 쓰는 표현·클래스 문자열까지 상수화하지 않는다.

## 컴포넌트

- shadcn/ui 등 외부 UI 키트를 쓰지 않고 자체 컴포넌트만 만든다.
- 컴포넌트 파일명·이름은 PascalCase, 1파일 1컴포넌트 default export, 화살표 함수(`const Name = () => …`)로 작성한다. 보조 컴포넌트도 별도 파일로 둔다.
- Server Component가 기본이고 상호작용 경계만 `"use client"`를 쓴다.
- 기존 kebab-case 기능 컴포넌트(legal·more-apps·not-found·brand-lab)는 그 화면을 다시 만들 때 새 규칙으로 교체한다.

## 디자인

- 색·글꼴·글자 크기·모서리·그림자는 `docs/design-system.md` 토큰만 쓴다. 임의 hex·`shadow-[…]`·`rounded-[…]`를 새로 만들지 않는다.
- 누를 수 있는 요소는 44px 이상, 접근 가능한 이름·키보드 포커스·semantic HTML을 제공한다.
- 사용자에게 내부 개발 목표나 구현 세부를 제품 문구로 노출하지 않는다.

## 검증과 Git

- 마무리 전 `pnpm prettier --write .`, `pnpm lint`, `pnpm typecheck`, `pnpm build`를 실행한다.
- `main`에 push하면 바로 배포된다. 사용자가 요청할 때만 push하고 평소에는 의미 단위로 커밋만 한다.
- Conventional Commits + 한국어 설명. `Co-Authored-By`는 넣지 않는다.
- 로컬 Git 설정은 `user.name=berryfy`, `user.email=public.berryfy@gmail.com`이며 global 설정은 바꾸지 않는다.
