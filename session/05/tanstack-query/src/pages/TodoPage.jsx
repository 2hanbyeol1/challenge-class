import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const inputRef = useRef(null);

  const { isPending, mutate } = useMutation({
    mutationFn: (variables) => axios.post(ENDPOINT, { value: variables }),
    onSuccess: (result) => {
      console.log(result);
      alert("성공했어!");
    },
    onError: () => {
      alert("실패했어...");
    },
  });

  const handleClickButton = async () => {
    try {
      mutate(inputRef.current.value, { onSuccess: () => alert("성공 22") });
    } catch {
      console.log("에러");
    }
  };

  return (
    <Page>
      <input
        ref={inputRef}
        type="text"
        className="border"
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
        disabled={isPending}
      />
      <button
        className="bg-black text-white"
        onClick={handleClickButton}
        disabled={isPending}
      >
        눌러주세요
      </button>
    </Page>
  );
}

export default TodoPage;
