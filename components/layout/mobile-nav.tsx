"use client";

import { useState } from "react";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// 모바일 화면용 Sheet 기반 사이드 네비게이션
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="메뉴 열기"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left">{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-1">
          {siteConfig.navItems.map((item) => (
            <MobileLink
              key={item.href}
              href={item.href}
              onOpenChange={setOpen}
            >
              {item.label}
            </MobileLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

// Sheet 닫힘을 처리하는 Link 래퍼
interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${className ?? ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}
