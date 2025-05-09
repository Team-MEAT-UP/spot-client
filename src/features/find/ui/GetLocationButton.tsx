interface GetLocationButtonProps {
  onClick?: () => void;
}

export const GetLocaitonButton = ({ onClick }: GetLocationButtonProps) => {
  return (
    <button
      className=" flex gap-1 justify-center w-full py-[12px] rounded-xl bg-gray-5 text-gray-50 text-md hover:bg-gray-10"
      onClick={onClick}>
      <img src="./icon/location.svg" alt="현재 위치" />내 위치 불러오기
    </button>
  );
};
