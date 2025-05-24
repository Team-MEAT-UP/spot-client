import { useEffect, useState } from "react";
import check from "@/assets/icon/check.svg";

interface ToastProps {
  message: string;
  duration?: number;
}

const Toast = ({ message, duration = 2000 }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideTimeout = setTimeout(() => setVisible(false), duration);

    return () => clearTimeout(hideTimeout);
  }, [duration]);

  return (
    <div
      className={`fixed bottom-10 left-1/2 flex flex-row w-[320px] -translate-x-1/2 items-center gap-2 px-4 py-3 rounded-xl text-white text-base font-medium z-[1003] transition-opacity duration-300 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      style={{
        background: "rgba(28, 28, 34, 0.80)",
        backdropFilter: "blur(6px)",
      }}>
      <img src={check} alt="check" className="w-5 h-5" />
      <p>{message}</p>
    </div>
  );
};

export default Toast;
