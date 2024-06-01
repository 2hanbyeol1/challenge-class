import { createContext, useContext, useState } from "react";
import uuid from "react-uuid";
import Toast from "../components/Toast";

const initialValue = null;
const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const value = {
    addToast: ({ title, content, time = 2000 }) => {
      const toastId = uuid();
      console.log(time);
      setToasts([...toasts, { id: toastId, title, content, time }]);
      setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.id !== toastId)
        );
      }, time + 500);
    },
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-6 right-6 flex flex-col gap-y-1">
        {toasts.map((toast, idx) => (
          <Toast
            key={idx}
            title={toast.title}
            content={toast.content}
            time={toast.time}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
