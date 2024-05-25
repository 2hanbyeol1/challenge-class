import { useSelector } from "react-redux";

export default function Display() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); //
  // selector에서 선택한 state가 변경될 때 리렌더링된다.
  const status = isLoggedIn ? "로그인" : "로그아웃";

  return (
    <div style={{ borderBottom: "1px solid black" }}>
      현재 {status} 상태입니다.
    </div>
  );
}
