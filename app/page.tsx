import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";

// 랜딩 페이지 — Hero + 기능 소개 섹션
export default function HomePage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4">
      <Hero />
      <Features />
    </div>
  );
}
