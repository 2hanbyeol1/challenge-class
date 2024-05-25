import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MemoEditor from "../pages/MemoEditor";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MemoEditor />,
      },
    ],
  },
]);

export default router;
