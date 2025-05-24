import ArrowLine from "@/assets/icon/rightArrowLine.svg";
import Subway from "@/assets/icon/subway.svg";
import SubwayGray from "@/assets/icon/subwayGray.svg";
import Car from "@/assets/icon/car.svg";
import CarGray from "@/assets/icon/carGray.svg";
import { TransferType } from "@/features/mapView/model";
import { useTransfer } from "@/features/mapView/hooks";

interface TransferDetailProps {
  type: TransferType;
  setType: React.Dispatch<React.SetStateAction<"subway" | "car">>;
  averageDuration: number;
  startPoint: string;
  endPoint: string;
  isMe: boolean;
}

export const TransferDetail = ({ type, setType, averageDuration, startPoint, endPoint, isMe }: TransferDetailProps) => {
  const { mutate } = useTransfer();

  const handleClick = (isTransit: boolean) => {
    if (!isMe) return;
    else {
      mutate({
        isTransit: isTransit,
      });
    }
  };

  return (
    <div className="flex flex-col px-5 py-4 gap-1">
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-gray-90">{averageDuration}분</span>
        <div className="flex gap-2">
          <button
            className={`flex justify-center items-center w-8 h-8 rounded-2xl ${type === "subway" ? "bg-metro-line2" : "bg-gray-5"}`}
            onClick={() => {
              setType("subway");
              handleClick(true);
            }}>
            <img src={type === "subway" ? Subway : SubwayGray} alt="subway" className="w-6 h-6" />
          </button>
          <button
            className={`flex justify-center items-center w-8 h-8 rounded-2xl ${type === "car" ? "bg-sub-sub" : "bg-gray-5"}`}
            onClick={() => {
              setType("car");
              handleClick(false);
            }}>
            <img src={type === "car" ? Car : CarGray} alt="car" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex gap-1 items-center text-md font-semibold text-gray-60">
        {startPoint}
        <img src={ArrowLine} alt="arrow" className="w-4 h-4" />
        {endPoint}
      </div>
    </div>
  );
};
