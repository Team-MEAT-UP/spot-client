import { KakaoLogin } from "@/features/main/ui";
import Button from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#E5EFF7] h-screen-dvh flex flex-col justify-end">
      <div
        className="flex flex-col gap-3 items-center pb-6 h-fit px-5 pt-32 z-10"
        style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 30%)" }}>
        <span className="text-md font-medium text-gray-60">모임의 기준을 만들다</span>
        <img src="/icon/logo.svg" alt="logo" className="mb-[38px]" />
        <Button
          onClick={() => {
            navigate("/find");
          }}>
          중간지점 찾기
        </Button>
        <KakaoLogin />
      </div>
      <img src="/image/main.png" alt="main" className="absolute top-16 right-0" />
    </div>
  );
};

export default MainPage;
