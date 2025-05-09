import { TransferType } from "../../model";

interface FixedButtonProps {
  type: TransferType;
  setType: React.Dispatch<React.SetStateAction<"subway" | "car">>;
}

export const FixedButton = ({ type, setType }: FixedButtonProps) => {
  return (
    <div className="flex px-5 py-3 fixed bottom-0 left-0 w-full z-10 bg-white">
      <button
        className={`flex gap-1 items-center w-1/2 justify-center text-md py-2 ${type === "subway" ? "font-semibold text-white rounded-[50px] bg-gray-90" : "font-medium text-gray-30"}`}
        onClick={() => setType("subway")}>
        <img src={type === "subway" ? "/icon/subway.svg" : "/icon/subwayGray.svg"} alt="subway" />
        대중교통
      </button>
      <button
        className={`flex gap-1 items-center w-1/2 justify-center text-md py-2 ${type === "car" ? "font-semibold text-white rounded-[50px] bg-gray-90" : "font-medium text-gray-30"}`}
        onClick={() => setType("car")}>
        <img src={type === "car" ? "/icon/car.svg" : "/icon/carGray.svg"} alt="subway" />
        자가용
      </button>
    </div>
  );
};
