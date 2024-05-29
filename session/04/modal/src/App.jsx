import "./App.css";
import { useModal } from "./contexts/modal.context";
import "./custom.css";

function App() {
  const modal = useModal();

  const handleClickButton = () => {
    // modal.open(<Modal title="샘플 모달" content="샘플 컨텐츠" />);
    modal.open({ title: "샘플 모달", content: "샘플 컨텐츠" });
  };

  return (
    <main>
      <button onClick={handleClickButton}>모달 띄우기</button>
      {Array(5000)
        .fill(0)
        .map((_, idx) => (
          <div key={idx}>{idx + 1}</div>
        ))}
    </main>
  );
}

export default App;
