import { BottomSheet } from "@/shared/ui";
import { Overlay } from "@/shared/ui/BottomSheet/Overlay";
import Member from "@/assets/icon/addMemberRequired.svg";
import { FixedButtons } from "./durationBottomsheet";

export const AddMemberBottomSheet = () => {
  return (
    <>
      <Overlay />
      <BottomSheet>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center justify-center mb-16">
            <img src={Member} alt="멤버를 추가 필요" className="w-[160px] h-[160px]" />
            <h1 className="text-gray-80 font-bold text-lg">새로운 출발지를 추가해주세요</h1>
            <p className="text-gray-40 text-sm">직접 추가하거나, 링크를 공유할 수 있어요</p>
          </div>
        </div>
        <FixedButtons />
      </BottomSheet>
    </>
  );
};
