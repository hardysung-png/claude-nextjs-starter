import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Separator } from "@/components/ui/separator";

// 사이트 상단 고정 헤더 — 데스크톱 네비 + 모바일 Sheet 네비
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4">
        {/* 로고 */}
        <Link href="/" className="mr-6 flex items-center gap-2 font-semibold">
          <span className="text-primary">◆</span>
          <span>{siteConfig.name}</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
      <Separator />
    </header>
  );
}
