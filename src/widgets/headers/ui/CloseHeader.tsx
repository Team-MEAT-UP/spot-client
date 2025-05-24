import { useNavigate } from "react-router-dom";
import Close from "@/assets/icon/close.svg";

interface CloseHeaderProps {
  url?: string;
  title?: string;
  onClick?: () => void;
}

export const CloseHeader = ({ url, title, onClick }: CloseHeaderProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      navigate(url);
    }
  };

  return (
    <header className="relative w-full px-5 py-3 flex justify-center items-center">
      {title && <span className="text-md font-semibold text-gray-90">{title}</span>}
      <button onClick={handleClick} className="absolute top-3 right-5">
        <img src={Close} alt="close" className="w-6 h-6" />
      </button>
    </header>
  );
};
