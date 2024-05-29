import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useLoginStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      logIn: () => set(() => ({ isLoggedIn: true })),
      logOut: () => set(() => ({ isLoggedIn: false })),
    }),
    {
      name: "login-store",
      storage: createJSONStorage(() => sessionStorage), // storage 정보 미 입력 시 default : localStorage
    }
  )
);

export default useLoginStore;
