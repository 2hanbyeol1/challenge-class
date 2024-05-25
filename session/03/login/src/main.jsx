import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2. 저장소를 앱에 주입 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
