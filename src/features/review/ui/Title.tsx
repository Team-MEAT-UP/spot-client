interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-2xl font-semibold">
      <div className="overflow-hidden text-ellipsis whitespace-nowrap text-sub-sub">{title}</div>
      <p className="text-gray-70">방문 하셨나요?</p>
    </div>
  );
};
