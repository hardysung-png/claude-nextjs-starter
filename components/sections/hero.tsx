import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

// 랜딩 페이지 최상단 히어로 섹션
export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-24 text-center md:py-36">
      {/* 배지 */}
      <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        <span>Next.js 16 · Tailwind v4 · shadcn/ui 스타터킷</span>
      </div>

      {/* 헤드라인 */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          빠르게 시작하는{" "}
          <span className="text-primary">모던 웹</span>{" "}
          개발
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          최신 기술 스택으로 구성된 스타터킷입니다. 다크모드, 반응형 레이아웃,
          폼 유효성 검사까지 기본 설정이 모두 완료되어 있습니다.
        </p>
      </div>

      {/* CTA 버튼 */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/dashboard">
            대시보드 보기
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/contact">문의하기</Link>
        </Button>
      </div>
    </section>
  );
}
