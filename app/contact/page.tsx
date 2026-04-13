"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Zod 스키마 — 필드별 유효성 규칙 정의
const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "이름은 2자 이상이어야 합니다." })
    .max(50, { message: "이름은 50자 이하여야 합니다." }),
  email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요." }),
  subject: z
    .string()
    .min(5, { message: "제목은 5자 이상이어야 합니다." })
    .max(100, { message: "제목은 100자 이하여야 합니다." }),
  message: z
    .string()
    .min(10, { message: "메시지는 10자 이상이어야 합니다." })
    .max(1000, { message: "메시지는 1000자 이하여야 합니다." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// 문의 페이지 — React Hook Form + Zod + sonner 토스트 예시
export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: ContactFormValues) {
    // 실제 API 호출로 교체하세요
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log(values);
    toast.success("문의가 접수되었습니다!", {
      description: "빠른 시일 내에 답변드리겠습니다.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16">
      <div className="mx-auto max-w-xl">
        {/* 페이지 헤더 */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">문의하기</h1>
          <p className="mt-3 text-muted-foreground">
            React Hook Form + Zod 기반의 폼 유효성 검사 예시입니다.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>문의 양식</CardTitle>
            <CardDescription>
              모든 필드를 작성한 후 제출하면 sonner 토스트로 결과를 확인할 수 있습니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                {/* 이름 */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="홍길동" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 이메일 */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 제목 */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>제목</FormLabel>
                      <FormControl>
                        <Input placeholder="문의 제목을 입력하세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 메시지 */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>메시지</FormLabel>
                      <FormControl>
                        <textarea
                          className="flex min-h-32 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="문의 내용을 자세히 작성해주세요"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        10자 이상 1000자 이하로 작성해주세요.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "전송 중..." : "문의 전송"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
