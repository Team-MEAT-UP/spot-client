import Morning from "@/assets/icon/morning.svg";
import MorningActive from "@/assets/icon/morningBlue.svg";
import Afternoon from "@/assets/icon/afternoon.svg";
import AfternoonActive from "@/assets/icon/afternoonBlue.svg";
import Evening from "@/assets/icon/evening.svg";
import EveningActive from "@/assets/icon/eveningBlue.svg";
import Check from "@/assets/icon/checkBlue.svg";
import { VisitedTimeType } from "../model";

interface FirstStepProps {
  selectedTime: VisitedTimeType | "";
  setSelectedTime: (time: VisitedTimeType) => void;
}

const options = [
  {
    label: "아침",
    value: "MORNING" as const,
    imageUrl: Morning,
    activeUrl: MorningActive,
  },
  {
    label: "점심",
    value: "LUNCH" as const,
    imageUrl: Afternoon,
    activeUrl: AfternoonActive,
  },
  {
    label: "저녁",
    value: "NIGHT" as const,
    imageUrl: Evening,
    activeUrl: EveningActive,
  },
];

const FirstStep = ({ selectedTime, setSelectedTime }: FirstStepProps) => {
  return (
    <div className="flex flex-col gap-3 items-center mt-8">
      {options.map(option => {
        const isSelected = selectedTime === option.value;

        return (
          <button
            key={option.value}
            onClick={() => setSelectedTime(option.value)}
            className={`relative flex gap-3 py-3 px-4 rounded-xl w-full text-md font-semibold items-center border 
              ${isSelected ? "bg-white border-sub-sub text-sub-sub" : "bg-gray-5 text-gray-60 border-gray-5"}
            `}>
            <img className="w-8 h-8" src={isSelected ? option.activeUrl : option.imageUrl} alt={option.value} />
            {option.label}
            {isSelected && <img className="absolute top-4 right-4" src={Check} alt="check" />}
          </button>
        );
      })}
    </div>
  );
};

export default FirstStep;
