import { BackHeader } from "@/widgets/headers";
import { ReasonForm } from "./ReasonForm";
import { LocationInput } from "./LocationInput";
import { CompleteButton } from "./CompleteButton";
import { NonVisitedReasonCategory, VisitedPlaceProps } from "../model";

interface OtherPlaceFormProps {
  selectedReasons: NonVisitedReasonCategory[];
  setSelectedReasons: React.Dispatch<React.SetStateAction<NonVisitedReasonCategory[]>>;
  handleLocationStep: () => void;
  selectedPlace: VisitedPlaceProps | null;
  setEtcReason: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (reason?: string) => void;
  isSubmitting: boolean;
  directInput: string;
  setDirectInput: React.Dispatch<React.SetStateAction<string>>;
}

export const OtherPlaceForm = ({
  selectedReasons,
  setSelectedReasons,
  handleLocationStep,
  selectedPlace,
  setEtcReason,
  onSubmit,
  isSubmitting,
  directInput,
  setDirectInput,
}: OtherPlaceFormProps) => {
  const handleComplete = () => {
    if (directInput.trim()) {
      setEtcReason(directInput.trim());
      onSubmit(directInput.trim());
    } else {
      onSubmit();
    }
  };

  return (
    <div className="relative min-h-screen pb-[80px]">
      <BackHeader />
      <div className="px-5">
        <ReasonForm
          selectedReasons={selectedReasons}
          setSelectedReasons={setSelectedReasons}
          directInput={directInput}
          setDirectInput={setDirectInput}
        />
        <LocationInput handleLocationStep={handleLocationStep} selectedPlace={selectedPlace} />
      </div>

      <div className="absolute bottom-[20px] left-0 w-full px-5">
        <CompleteButton label="완료하기" onClick={handleComplete} disabled={isSubmitting} />
      </div>
    </div>
  );
};
