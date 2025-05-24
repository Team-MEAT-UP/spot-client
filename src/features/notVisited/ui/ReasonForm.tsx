import { NonVisitedReasonCategory } from "../model";

const REASON_OPTIONS: { value: NonVisitedReasonCategory; label: string }[] = [
  { value: "NOISY", label: "시끄러워서" },
  { value: "CONGESTION", label: "사람이 너무 많아서" },
  { value: "DARKNESS", label: "공간이 어두워서" },
  { value: "INSUFFICIENT_SEAT", label: "좌석이 부족해서" },
];

interface ReasonFormProps {
  selectedReasons: NonVisitedReasonCategory[];
  setSelectedReasons: React.Dispatch<React.SetStateAction<NonVisitedReasonCategory[]>>;
  directInput: string;
  setDirectInput: (value: string) => void;
}

export const ReasonForm = ({ selectedReasons, setSelectedReasons, directInput, setDirectInput }: ReasonFormProps) => {
  const handleSelect = (reason: NonVisitedReasonCategory) => {
    setSelectedReasons(prev => {
      const newReasons = prev.includes(reason) ? prev.filter(r => r !== reason) : [...prev, reason];
      return newReasons;
    });
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-gray-70 mb-6">가지 않은 이유가 무엇인가요?</h1>
      <div className="flex flex-wrap gap-[12px] mb-4">
        {REASON_OPTIONS.map(option => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`w-fit px-4 py-3 rounded-2xl border cursor-pointer text-sm font-semibold
              ${
                selectedReasons.includes(option.value)
                  ? "bg-white text-sub-sub border-sub-sub"
                  : "bg-gray-white text-gray-40 border-gray-10"
              }
            `}>
            {option.label}
          </button>
        ))}
      </div>
      <input
        placeholder="직접 입력하기"
        value={directInput}
        onChange={e => setDirectInput(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-10 focus:outline-none focus:ring-0 focus:border-gray-40 text-base text-gray-60 placeholder:text-gray-40"
      />
    </div>
  );
};
