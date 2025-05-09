import { useNavigate } from "react-router-dom";

interface ChipProps {
  id: number;
  isComplete: boolean;
}

export const Chip = ({ id, isComplete }: ChipProps) => {
  const navigate = useNavigate();

  return (
    <button
      className={`flex gap-1 px-3 py-1 w-fit rounded-[40px] items-center text-sm font-semibold ${isComplete ? "bg-gray-5 text-gray-30" : "bg-sub-10 text-sub-sub"}`}
      onClick={() => {
        if (isComplete) return;

        navigate(`/review/${id}`);
      }}>
      <img src={isComplete ? "/icon/check.svg" : "/icon/review.svg"} alt="icon" />
      {isComplete ? "작성 완료" : "리뷰 작성"}
    </button>
  );
};
