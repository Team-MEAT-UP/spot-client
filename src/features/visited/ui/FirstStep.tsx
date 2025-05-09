interface FirstStepProps {
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
}

// @TODO 이미지 변경하기, 백엔드 구조에 맞게 요청 방식 수정하기
const options = [
  {
    label: "아침",
    value: "morning",
    imageUrl: "/icon/morning.svg",
    activeUrl: "/icon/morningBlue.svg",
  },
  {
    label: "점심",
    value: "afternoon",
    imageUrl: "/icon/afternoon.svg",
    activeUrl: "/icon/afternoonBlue.svg",
  },
  {
    label: "저녁",
    value: "evening",
    imageUrl: "/icon/evening.svg",
    activeUrl: "/icon/eveningBlue.svg",
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
            {option.label}에 방문했어요
            {isSelected && <img className="absolute top-4 right-4" src="/icon/checkBlue.svg" alt="check" />}
          </button>
        );
      })}
    </div>
  );
};

export default FirstStep;
