import { WalkTransfer } from "../../model";

export const WalkPath = ({ startBoard, endBoard, duration, distance }: WalkTransfer) => {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col">
        <img src="/icon/walk.svg" alt="walk" className="w-6 h-6" />
        <img
          src={startBoard ? "/icon/longPath.svg" : "/icon/middlePath.svg"}
          alt="Path"
          className="ml-[11px] w-[2px]"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-md font-medium text-gray-90 break-keep whitespace-normal mb-[2px]">
          {startBoard ? `${startBoard}로 나와서, ${endBoard}까지 걷기` : `${endBoard}까지 걷기`}
        </span>
        <div className="flex items-center gap-[6px] text-sm mb-8">
          <p className="font-semibold text-gray-50">{duration}분</p>
          <p className="text-gray-30">{distance}m 이동</p>
        </div>
      </div>
    </div>
  );
};
