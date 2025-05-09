import { useNavigate } from "react-router-dom";

interface HeaderProps {
  profileImg?: string;
}

export const MapHeader = ({ profileImg }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (profileImg) {
      navigate("/history");
    } else {
      navigate("/");
    }
  };

  return (
    <header className="flex justify-between items-center py-3 px-5 bg-white w-full z-[101] relative">
      <img src="icon/logo.svg" alt="logo" className="h-6" onClick={handleLogoClick} />
      {profileImg ? (
        <button onClick={() => navigate("/my")}>
          <img src={profileImg} alt="프로필 이미지" className="w-8 h-8 rounded-full" />
        </button>
      ) : (
        <button onClick={() => navigate("/")} className="font-semibold text-gray-80 text-md rounded-full">
          로그인
        </button>
      )}
    </header>
  );
};
