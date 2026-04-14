import Link from "next/link";
import { Globe, X } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

// 사이트 하단 푸터 — 카피라이트 + 링크 + 소셜 아이콘
export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-background">
      <div className="container mx-auto max-w-screen-2xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* 브랜드 + 카피라이트 */}
          <div className="flex flex-col items-center gap-1 md:items-start">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="text-primary">◆</span>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-xs text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* 링크 + 소셜 */}
          <div className="flex items-center gap-4">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pl-2">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Globe className="h-4 w-4" />
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
