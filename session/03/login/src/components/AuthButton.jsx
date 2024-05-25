import { useDispatch, useSelector } from "react-redux";
import { LOG_IN, LOG_OUT } from "../redux/reducers/auth.reducer";

function AuthButton() {
  const dispatch = useDispatch(); // 6-1. 우체부 생성
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClickButton = () => {
    // 5. action 작업 명세서 작성
    const action = {
      type: isLoggedIn ? LOG_OUT : LOG_IN,
    };
    dispatch(action); // 6-2. 우체부가 공장에 전달
  };

  return (
    <button onClick={handleClickButton}>
      {isLoggedIn ? "로그아웃하기" : "로그인하기"}
    </button>
  );
}

export default AuthButton;
