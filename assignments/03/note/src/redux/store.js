import { configureStore } from "@reduxjs/toolkit";
import memosSlices from "./slices/memos.slices";

const store = configureStore({
  reducer: {
    memos: memosSlices,
  },
});

store.subscribe(() => {
  const { memos } = store.getState();
  localStorage.setItem("memos", JSON.stringify(memos));
});

export default store;
