import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function DefaultLayout() {
  useEffect(() => {
    console.log("mount");
    console.log("공통된 비즈니스 로직 실행!");
    return () => console.log("unmount");
  });
  return (
    <div>
      <Link to="/">홈 페이지</Link>
      <br />
      <Link to="/posts">포스트 목록 페이지</Link>
      <br />
      <Link to="/posts/1">포스트 상세 페이지</Link>
      <Outlet />
    </div>
  );
}
