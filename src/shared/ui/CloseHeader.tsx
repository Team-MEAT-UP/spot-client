import { useNavigate } from "react-router-dom";

interface CloseHeaderProps {
  url: string;
}

const CloseHeader = ({ url }: CloseHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-5 py-3 flex justify-end">
      <button
        onClick={() => {
          navigate(url);
        }}>
        <img src="/icon/close.svg" alt="close" />
      </button>
    </header>
  );
};

export default CloseHeader;
