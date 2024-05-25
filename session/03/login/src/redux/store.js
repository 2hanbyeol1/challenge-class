import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";

const store = configureStore({
  reducer: {
    auth: authReducer, // 4. 공장 연결
  },
}); // 1. 저장소 생성

export default store;
