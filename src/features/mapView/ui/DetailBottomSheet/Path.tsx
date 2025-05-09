import { TransferInfo } from "../../model";
import { BusPath } from "./BusPath";
import { SubwayPath } from "./SubwayPath";
import { WalkPath } from "./WalkPath";

interface PathProps {
  startPoint: string;
  endPoint: string;
  transferInfo: TransferInfo[];
}

export const Path = ({ startPoint, endPoint, transferInfo }: PathProps) => {
  return (
    <div className="flex flex-col my-4 mx-5 mb-16">
      <div className="flex gap-3 items-center">
        <div className="relative">
          <img src="/icon/start.svg" alt="start" />
          <span className="absolute top-[5px] left-[3px] text-xxs font-semibold text-white">출발</span>
        </div>
        <span className="text-md font-semibold text-gray-90">{startPoint}</span>
      </div>
      <img src="/icon/shortPath.svg" alt="shortPath" className="ml-[11px] w-[2px]" />

      {transferInfo.map((info, index) => {
        if (info.type === "subway" && info.line) {
          return <SubwayPath key={index} {...info} />;
        }
        if (info.type === "bus") {
          return <BusPath key={index} {...info} />;
        }
        if (info.type === "walk") {
          return <WalkPath key={index} {...info} />;
        }
        return null;
      })}

      <div className="flex gap-3 items-center">
        <div className="relative">
          <img src="/icon/end.svg" alt="end" />
          <span className="absolute top-[5px] left-[3px] text-xxs font-semibold text-white">도착</span>
        </div>
        <span className="text-md font-semibold text-gray-90">{endPoint}</span>
      </div>
    </div>
  );
};
