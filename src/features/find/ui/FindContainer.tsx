import { useFindStore } from "@/shared/stores";
import { NameStep } from "./NameStep";
import { LocationStep } from "./LocationStep";

export const FindContainer = () => {
  const { currentStep } = useFindStore();

  return (
    <div className="flex-1 gap-y-[16px]">
      {currentStep === 0 && <NameStep />}
      {currentStep === 1 && <LocationStep />}
    </div>
  );
};
