import clsx from "clsx";
import { useEffect, useState } from "react";

function Toast({ title, content, time }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, time);
  }, []);

  return (
    <div
      className={clsx(
        "flex flex-col text-sm p-6 bg-white shadow-lg border rounded-lg w-[320px] transition-all duration-500",
        visible ? "translate-x-0" : "translate-x-[340px]"
      )}
    >
      <h6 className="font-semibold">{title}</h6>
      <p>{content}</p>
    </div>
  );
}

export default Toast;
