// 사이트 전체에서 공유되는 메타데이터와 네비게이션 설정의 단일 출처
export const siteConfig = {
  name: "Next Starter",
  description:
    "Next.js 16 + Tailwind v4 + shadcn/ui 기반의 모던 웹 스타터킷입니다.",
  url: "https://example.com",
  ogImage: "/og.png",
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  navItems: [
    { label: "홈", href: "/" },
    { label: "소개", href: "/about" },
    { label: "대시보드", href: "/dashboard" },
    { label: "문의", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
