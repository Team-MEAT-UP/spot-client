import { useEffect, useRef } from "react";
import { Portal } from "./Portal";

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1001]">
        <div
          ref={modalRef}
          className="w-[264px] bg-white shadow-[0px_0px_24px_0px_rgba(28, 28, 34, 0.25)] rounded-[20px]">
          {children}
        </div>
      </div>
    </Portal>
  );
};
