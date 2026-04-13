import type { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, BarChart3, Settings, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "대시보드",
  description: "대시보드 예시 페이지입니다.",
};

// 대시보드용 사이드바 네비게이션 항목
const sidebarItems = [
  { label: "개요", href: "/dashboard", icon: LayoutDashboard },
  { label: "분석", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "사용자", href: "/dashboard/users", icon: Users },
  { label: "설정", href: "/dashboard/settings", icon: Settings },
];

// 중첩 레이아웃 예시 — 사이드바 + 콘텐츠 영역 구조
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      <div className="flex gap-8">
        {/* 사이드바 */}
        <aside className="hidden w-52 shrink-0 md:block">
          <nav className="flex flex-col gap-1">
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              메뉴
            </p>
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <Separator orientation="vertical" className="hidden h-auto md:block" />

        {/* 메인 콘텐츠 */}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
