import { useNavigate } from "react-router-dom";

interface BackHeaderProps {
  url?: string;
  onClick?: () => void;
}

const BackHeader = ({ url, onClick }: BackHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-5 py-3">
      <button
        onClick={() => {
          if (onClick) {
            onClick();
          } else if (url !== undefined) {
            navigate(url);
          } else {
            navigate(-1);
          }
        }}>
        <img src="/icon/back.svg" alt="back" />
      </button>
    </header>
  );
};

export default BackHeader;
