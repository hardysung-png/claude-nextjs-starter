import { Zap, Palette, ShieldCheck, Code2, Smartphone, Moon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 각 feature 항목 데이터
const features = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description:
      "최신 App Router와 React 서버 컴포넌트로 빠른 페이지 로드와 스트리밍을 제공합니다.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description:
      "설정 파일 없이 CSS-first 방식으로 OKLCH 기반의 디자인 토큰을 활용합니다.",
  },
  {
    icon: Code2,
    title: "shadcn/ui 컴포넌트",
    description:
      "복사해서 사용하는 방식의 고품질 UI 컴포넌트로 디자인 시스템을 빠르게 구축합니다.",
  },
  {
    icon: Moon,
    title: "다크모드 지원",
    description:
      "next-themes 기반으로 라이트/다크/시스템 테마를 즉시 전환할 수 있습니다.",
  },
  {
    icon: Smartphone,
    title: "완전한 반응형",
    description:
      "모바일부터 데스크톱까지 모든 화면 크기에서 최적화된 레이아웃을 제공합니다.",
  },
  {
    icon: ShieldCheck,
    title: "타입 안전 폼",
    description:
      "React Hook Form + Zod 조합으로 런타임 유효성 검사와 타입 추론을 동시에 지원합니다.",
  },
] as const;

// 스타터킷 주요 기능을 소개하는 카드 그리드 섹션
export function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          포함된 기능
        </h2>
        <p className="mt-3 text-muted-foreground md:text-lg">
          프로덕션 수준의 기능이 모두 포함되어 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="transition-shadow hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
