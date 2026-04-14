---
name: 반복적으로 발견되는 코드 이슈 패턴
description: 이 프로젝트에서 반복 발생하는 코드 품질 이슈 및 안티패턴
type: project
---

## 버전 불일치 주석/문자열
- 코드 전반에 "Next.js 16"이라고 표기된 문자열이 있으나, 실제로는 next@16 패키지 사용
- `about/page.tsx` L19, L63, `features.tsx` L9, `hero.tsx` L13, `dashboard/page.tsx` L47, `site-config.ts` L5 에서 "Next.js 16" 문자열 존재
- 이는 런타임 에러가 아니라 사용자 노출 텍스트 오류

**Why:** 스타터킷이 처음에 Next.js 15 기반으로 문서화되었다가 16으로 업그레이드 후 텍스트 미동기화로 추정

## MobileLink 이중 네비게이션 안티패턴
- `components/layout/mobile-nav.tsx` L73-76: `onClick`에서 `router.push()`를 명시적으로 호출하면서 동시에 `<Link href>` 도 존재 → 동일 URL로 두 번 네비게이션 발생
- `<Link>`의 기본 동작만으로 충분, `router.push()` 제거 필요

## contact/page.tsx onSubmit 에러 핸들링 누락
- `onSubmit` 함수에 try-catch가 없어 API 호출 실패 시 에러 무음 처리됨
- `console.log(values)` 가 프로덕션 코드에 남아 있음

## dashboard/layout.tsx 활성 링크 표시 없음
- 사이드바 네비 링크가 현재 경로를 구분하지 않아 UX 저하
- `usePathname()` 사용 필요하나 Server Component로 되어 있어 클라이언트 분리가 필요

## SiteFooter 이중 Separator
- `site-footer.tsx` L13-14: `<footer>` 내부에 `border-t` CSS와 `<Separator />` 컴포넌트가 중복 적용되어 구분선이 두 번 렌더링됨
