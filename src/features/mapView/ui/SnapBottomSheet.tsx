import { SnapBottomSheet } from "@/shared/ui";
import { BottomSheetContent, FixedButtons } from "./BottomSheetContent";

export const SnapMapBottomSheet = () => {
  return (
    <SnapBottomSheet minHeightVh={35}>
      <div className="relative">
        <SnapBottomSheet.Header />
        <button className="absolute -top-14 left-1/2 -translate-x-1/2 bg-gray-80 text-white font-semibold text-md px-[24px] py-[12px] rounded-3xl">
          모임 장소 정하기
        </button>
      </div>
      <SnapBottomSheet.Content>
        <BottomSheetContent />
        <FixedButtons />
      </SnapBottomSheet.Content>
    </SnapBottomSheet>
  );
};
