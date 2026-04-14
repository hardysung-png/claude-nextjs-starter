import type { Metadata } from "next";
import { LayoutDashboard, BarChart3, Settings, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { DashboardNav } from "@/components/layout/dashboard-nav";

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
          <DashboardNav items={sidebarItems} />
        </aside>

        <Separator orientation="vertical" className="hidden h-auto md:block" />

        {/* 메인 콘텐츠 */}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
