import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const getFormatDateTime = () => {
  const date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();

  let period = hours >= 12 ? "오후" : "오전";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${year}년 ${month}월 ${day}일, ${period} ${hours}:${minutes}, ${seconds}:${milliseconds}`;
};

const getNewMemo = () => {
  return {
    id: uuid(),
    content: "",
    date: getFormatDateTime(),
    isSelected: true,
  };
};

const savedMemos = JSON.parse(localStorage.getItem("memos"));
const initialState = savedMemos
  ? savedMemos.map((memo, idx) =>
      idx === 0 ? { ...memo, isSelected: true } : { ...memo, isSelected: false }
    )
  : [getNewMemo()];

const memosSlice = createSlice({
  name: "memos",
  initialState,
  reducers: {
    addMemo(prevState) {
      return [
        ...prevState.map((memo) => ({ ...memo, isSelected: false })),
        getNewMemo(),
      ].sort((a, b) => (a.date > b.date ? -1 : 1));
    },
    removeMemo(prevState) {
      const remainingMemos = prevState.filter((memo) => !memo.isSelected);
      remainingMemos[0] = {
        ...remainingMemos[0],
        isSelected: true,
      };
      return remainingMemos;
    },
    updateMemo(prevState, { payload: { memoId, newContent } }) {
      return prevState.map((memo) =>
        memo.id === memoId ? { ...memo, content: newContent } : memo
      );
    },
    selectMemo(prevState, { payload: memoId }) {
      return prevState.map((memo) =>
        memo.id === memoId
          ? { ...memo, isSelected: true }
          : { ...memo, isSelected: false }
      );
    },
  },
});

export const { addMemo, removeMemo, updateMemo, selectMemo } =
  memosSlice.actions;
export default memosSlice.reducer;
