import Button from "./components/Button";
import Input from "./components/Input";
import { useToast } from "./context/toast.context";

function App() {
  const { addToast } = useToast();
  return (
    <main className="h-screen flex justify-center items-center">
      <div>
        <h1 className="mb-6 text-2xl font-semibold text-center">
          토스트 컨트롤러
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const content = e.target.content.value;
            if (!title || !content)
              return alert("제목과 내용을 모두 입력해 주세요");
            const time = e.target.time.value;
            addToast({ title, content, time: time || 2000 });
          }}
          className="flex flex-col gap-y-4 w-80"
        >
          <Input label="제목 (필수)" name="title" />
          <Input label="내용 (필수)" name="content" />
          <Input type="number" label="노출 시간(ms) (선택)" name="time" />
          <Button text="토스트 띄우기" />
        </form>
      </div>
    </main>
  );
}

export default App;
