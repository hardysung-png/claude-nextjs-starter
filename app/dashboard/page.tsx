import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// 대시보드 통계 카드 데이터
const stats = [
  {
    label: "총 사용자",
    value: "12,345",
    change: "+12%",
    icon: Users,
  },
  {
    label: "월간 매출",
    value: "₩4,560,000",
    change: "+8.2%",
    icon: DollarSign,
  },
  {
    label: "활성 세션",
    value: "1,234",
    change: "+3.1%",
    icon: Activity,
  },
  {
    label: "성장률",
    value: "23.5%",
    change: "+4.5%",
    icon: TrendingUp,
  },
];

// 대시보드 메인 페이지 — 중첩 레이아웃 콘텐츠 영역 예시
export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">대시보드 개요</h1>
        <p className="text-sm text-muted-foreground">
          Next.js 16 중첩 레이아웃(Nested Layout) 사용 예시입니다.
        </p>
      </div>

      <Separator />

      {/* 통계 카드 그리드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardDescription className="text-xs font-medium uppercase tracking-wider">
                  {stat.label}
                </CardDescription>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="mt-0.5 text-xs text-emerald-600 dark:text-emerald-400">
                  {stat.change} 지난 달 대비
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 빈 콘텐츠 플레이스홀더 */}
      <Card className="min-h-64">
        <CardHeader>
          <CardTitle>차트 영역</CardTitle>
          <CardDescription>
            @tanstack/react-query 또는 서버 액션으로 데이터를 불러와 차트를 렌더링하세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-12">
          <p className="text-sm text-muted-foreground">차트를 여기에 배치하세요</p>
        </CardContent>
      </Card>
    </div>
  );
}
