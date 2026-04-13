---
description: Next.js 컴포넌트 성능 최적화 분석 및 개선안 제시
argument-hint: <파일 경로> (예: app/page.tsx, components/ui/button.tsx)
---

다음 파일을 분석하여 성능 최적화 방안을 제시해주세요: $ARGUMENTS

## 분석 항목

### 1. 불필요한 리렌더링 감지 및 메모이제이션 적용
파일을 읽고 아래 항목을 점검하세요:
- props가 변경되지 않아도 리렌더링되는 컴포넌트 → `React.memo` 적용 제안
- 매 렌더마다 새로 생성되는 객체/배열/함수 → `useMemo` / `useCallback` 적용 위치 제안
- 의존성 배열이 없거나 잘못된 `useEffect` 감지
- 적용 전후 코드 예시를 함께 제시할 것

### 2. Next.js Image 최적화 여부 체크
- `<img>` 태그 사용 여부 확인 → `next/image`의 `<Image>`로 교체 제안
- `<Image>` 사용 시 `width`, `height`, `priority`, `placeholder` 등 속성 누락 여부 점검
- 외부 이미지 도메인의 경우 `next.config.js` 설정 필요 여부 안내

### 3. 번들 사이즈 줄이기 위한 import 최적화
- 라이브러리 전체를 import하는 경우 감지 (예: `import _ from 'lodash'` → `import debounce from 'lodash/debounce'`)
- Tree-shaking이 가능한 named import로 변경 제안
- 사용하지 않는 import 감지 및 제거 제안
- Dynamic import (`next/dynamic`)으로 전환 가능한 무거운 컴포넌트 식별

### 4. SSR / SSG 적용 가능 여부 판단
- 데이터 페칭 방식 확인 (`useEffect` 내 fetch, SWR, React Query 등)
- 정적 데이터 → `generateStaticParams` + `fetch` with `cache: 'force-cache'` 제안
- 동적 데이터 → `fetch` with `cache: 'no-store'` 또는 `revalidate` 설정 제안
- `'use client'` 디렉티브가 불필요한 경우 Server Component로 전환 제안
- 현재 렌더링 전략(CSR/SSR/SSG/ISR)을 명시하고 더 나은 전략 추천

### 5. 코드 스플리팅 적용 가능 여부 체크
- 초기 번들에 포함되지 않아도 되는 무거운 컴포넌트 식별
- `next/dynamic`을 활용한 lazy loading 적용 위치 제안
- 모달, 드로어, 탭 컨텐츠 등 조건부 렌더링 컴포넌트에 dynamic import 적용 제안
- `loading` fallback UI 예시 코드 포함

## 출력 형식

분석 결과를 아래 형식으로 정리하세요:

```
## 최적화 분석 결과: [파일명]

### 현재 상태 요약
- 렌더링 전략: CSR / SSR / SSG / ISR
- 주요 문제점: (목록)

### 개선 항목 (우선순위 순)

#### [항목 이름] - 중요도: 높음/중간/낮음
**문제:** (현재 코드의 문제점)
**개선안:** (적용할 최적화 방법)
**예시 코드:**
\`\`\`tsx
// Before
...

// After
...
\`\`\`

### 예상 효과
- (적용 후 기대되는 성능 개선 효과 요약)
```

파일이 존재하지 않거나 경로가 잘못된 경우 사용자에게 알려주세요.
