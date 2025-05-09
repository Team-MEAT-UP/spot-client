import { BottomSheet } from "@/shared/ui";
import { FixedButtons } from "./BottomSheetContent";
import { Overlay } from "@/shared/ui/BottomSheet/Overlay";

export const TooCloseSheet = () => {
  return (
    <>
      <Overlay />
      <BottomSheet minHeightVh={60} maxHeightVh={60}>
        <BottomSheet.Header />
        <BottomSheet.Content>
          <div className="flex flex-col justify-center items-center h-full">
            <img src="/icon/distanceError.svg" alt="멤버를 추가 필요" />
            <h1 className="text-gray-80 font-bold text-lg">가까워서 중간지점을 찾을 수 없어요</h1>
            <p className="text-gray-40 text-sm">멤버를 추가하거나 출발지를 수정해주세요</p>
          </div>
          <FixedButtons />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};
