import { logout } from "../service";

export const Logout = () => {
  const handleClick = async () => {
    const isSuccess = await logout();
    console.log(isSuccess); // @TODO 로그아웃 처리를 어떻게 구현할지 고민!
  };

  return (
    <button
      className="w-full h-[44px] flex gap-2 items-center justify-center bg-gray-5 rounded-xl"
      onClick={handleClick}>
      <img src="/icon/logout.svg" alt="logout" />
      <p className="text-md font-medium text-gray-60">로그아웃</p>
    </button>
  );
};
