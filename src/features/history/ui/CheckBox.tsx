interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}

export const CheckBox = ({ label, isChecked, onToggle }: CheckBoxProps) => {
  return (
    <div className="flex justify-between">
      <button className="flex gap-2 items-center" onClick={onToggle}>
        <img src={isChecked ? "/icon/checkBoxBlue.svg" : "/icon/checkBox.svg"} alt="check" />
        <p className="text-md font-medium text-gray-60">{label}</p>
      </button>
      <button>
        <img src="/icon/rightArrow.svg" alt="arrow" />
      </button>
    </div>
  );
};
