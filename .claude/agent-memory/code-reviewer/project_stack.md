---
name: 프로젝트 기술 스택 및 버전
description: 이 프로젝트에서 사용하는 실제 패키지 버전 및 주요 기술 스택 정보
type: project
---

이 프로젝트는 Next.js 16.2.3 (패키지명 `next`)을 사용하며, 문서상 "Next.js 15"로 불리지만 실제 설치 버전은 16이다. `node_modules/next/dist/docs/` 기준으로 검토해야 한다.

**Why:** package.json의 `"next": "16.2.3"` 확인. 기존 Next.js 15와 다른 API(params가 Promise 타입, viewport 분리 export 등) 적용.

**How to apply:** 코드 리뷰 시 next@16 문서 기준으로 판단. params 타입은 `Promise<{...}>`, viewport는 별도 export 필요.

## 실제 버전
- next: 16.2.3
- react: 19.2.4
- typescript: ^5
- tailwindcss: ^4 (CSS-first, config 파일 없음)
- radix-ui: ^1.4.3 (shadcn/ui 신규 패키지 방식 — `radix-ui` 단일 패키지)
- react-hook-form: ^7.72.1
- zod: ^4.3.6
- sonner: ^2.0.7
- next-themes: ^0.4.6

## 아키텍처 특이사항
- shadcn/ui 컴포넌트가 `@radix-ui/*` 아닌 `radix-ui` 단일 패키지에서 import
- Tailwind v4: `@import "tailwindcss"` CSS-first 방식, `tailwind.config.js` 없음
- `@theme inline` 블록으로 디자인 토큰 CSS 변수와 Tailwind 토큰 연결
