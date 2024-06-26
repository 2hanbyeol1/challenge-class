### 레이아웃을 쓰는 경우

1. 동일한 UI
2. 동일한 로직

### 앱 라우트

app 디렉터리 아래에 폴더는 경로가 된다.

#### 동적 라우팅

폴더명에 대괄호 []를 붙힌다

#### 라우팅에서 제외하는 방법

app/hello/page.tsx
-> /hello

app/(hello)/page.tsx
-> /

app/\_hello/page.tsx
-> /

() 언제 사용할까? -> provider
-> app/(providers)/posts.page.tsx

\_ 언제 사용할까? -> page.tsx에 그 페이지에서만 사용하는 component나 hook을 app 라우터 아래의 폴더로 작성하고 싶을 때, url과 router에서 포함하고 싶지 않을 때
-> app/posts/\_components/PostAside/page.tsx

### 'use client' 쓰는 경우

1. hook을 쓰는 경우, hook은 대부분 브라우저 환경에서 작동한다.
2. window, document 등 브라우저 환경에서만 존재하는 변수에 접근할 때

### SSR

컴포넌트 앞에 async를 붙일 수 있다. useEffect를 사용하지 않고 fetch 가능
console.log를 찍으면 브라우저 콘솔창이 아닌 서버의 콘솔창에 뜬다

### SSG

Static Site Generation
npm run build할 때만 실행되고 정적인 페이지를 생성한다.

컴포넌트 밖에 `export const revalidate = 5`와 같은 Route Segment Config를 넣어주면 설정을 해준다.
revalidate = 5는 이전 fetch 후 5초가 지난 새로고침에서 fetch를 해준다
dynamic 옵션을 이용하면 새로고침할 때마다 fetch를 해준다.
