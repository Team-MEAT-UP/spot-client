import { BusTransfer } from "../../model";
import { BusChip } from "./BusChip";

export const BusPath = ({ startBoard, endBoard, bus, stationsCnt, duration }: BusTransfer) => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="flex flex-col items-center w-fit">
          <img src="/icon/bus.svg" alt="bus" className="w-6 h-6" />
          <div className="h-[87px] w-1 bg-gray-70" />
          <div className="flex w-6 h-6 justify-center items-center bg-gray-70 rounded-[30px] text-xxs font-semibold text-white">
            하차
          </div>
        </div>
        <div className="flex flex-col text-md font-medium text-gray-90">
          <span className="mb-2">{startBoard} 승차</span>
          <div className="flex gap-1 mb-2">
            {bus && bus.map(busNumber => <BusChip key={busNumber} busNumber={busNumber} />)}
          </div>
          <div className="flex items-center gap-[6px] text-sm mb-8">
            <p className="font-semibold text-gray-50">{duration}분</p>
            <p className="text-gray-30">{stationsCnt}개 역 이동</p>
          </div>
          <span>{endBoard} 하차</span>
        </div>
      </div>
      <img src="/icon/shortPath.svg" alt="shortPath" className="ml-[11px] w-[2px]" />
    </>
  );
};
