// 3-1. action type 생성
// 관습적으로 액션 타입은 상수로 정의한다.
export const LOG_IN = "auth/LOG_IN";
export const LOG_OUT = "auth/LOG_OUT";

// 3-2. state의 초기값 지정
const initialState = {
  isLoggedIn: false,
};

// 3. reducer(공장) 생성
function authReducer(prevState = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      // 작업 내용
      // prevState.isLoggedIn = true; << 상태 불변성 X
      return { ...prevState, isLoggedIn: true };
    // 작업이 다 반영된 상태를 리턴
    case LOG_OUT:
      // 뚝딱
      // 작업이 다 반영된 상태를 리턴
      return { ...prevState, isLoggedIn: false };
    default:
      return prevState;
  }
}

export default authReducer;
