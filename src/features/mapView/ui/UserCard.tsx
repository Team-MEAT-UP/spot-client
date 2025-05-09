interface UserCardProps {
  name: string;
  startStation: string;
  totalTime: string;
  onClick?: () => void;
}

export const UserCard = ({ name, startStation, totalTime, onClick }: UserCardProps) => {
  return (
    <div className="py-[8px] cursor-pointer" onClick={onClick}>
      <div className="flex gap-1 text-lg font-bold text-gray-80">
        <img src="./icon/transfer.svg" alt="transfer" />
        <span>{totalTime}분</span>
      </div>
      <p className="text-gray-40 text-sm">
        {name} · {startStation}
      </p>
    </div>
  );
};
