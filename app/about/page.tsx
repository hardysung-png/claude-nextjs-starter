import type { Metadata } from "next";
import { Users, Target, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "소개",
  description: "Next Starter 프로젝트 소개 페이지입니다.",
};

// About 페이지 — 정적 서버 컴포넌트 예시
export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16">
      {/* 페이지 헤더 */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">소개</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          이 스타터킷은 Next.js 16 기반의 빠른 웹 개발 시작을 위해 만들어졌습니다.
        </p>
      </div>

      <Separator className="mb-12" />

      {/* 핵심 가치 카드 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Target className="h-8 w-8 text-primary mb-2" />
            <CardTitle>목표</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            복잡한 초기 설정 없이 바로 기능 개발에 집중할 수 있는 환경을 제공합니다.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Lightbulb className="h-8 w-8 text-primary mb-2" />
            <CardTitle>철학</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            검증된 오픈소스 라이브러리를 조합하여 안정적이고 유지보수가 쉬운 코드를 지향합니다.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>대상</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Next.js 기반 프로젝트를 빠르게 시작하려는 개인 개발자 또는 소규모 팀에 최적화되어 있습니다.
          </CardContent>
        </Card>
      </div>

      {/* 기술 스택 목록 */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">기술 스택</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {[
            "Next.js 16 (App Router)",
            "React 19",
            "TypeScript 5",
            "Tailwind CSS v4",
            "shadcn/ui (radix-nova)",
            "next-themes",
            "React Hook Form",
            "Zod",
            "lucide-react",
          ].map((tech) => (
            <li
              key={tech}
              className="flex items-center gap-2 rounded-lg border bg-muted/30 px-4 py-2.5 text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
