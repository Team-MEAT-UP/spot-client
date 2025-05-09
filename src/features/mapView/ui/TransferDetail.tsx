export const SubwayDetail = () => {};

export const BusDetail = () => {};

interface CarDetailProps {
  driveDistance: number;
  toll: string;
  taxiToll: string;
  parking?: { name: string; distance: number };
}

export const CarDetail = ({ driveDistance, toll, taxiToll, parking }: CarDetailProps) => {
  return (
    <section className="flex flex-col gap-4 px-5 mb-16">
      <div className="flex flex-col gap-[2px] text-md font-medium text-gray-40">
        <span className="text-lg font-bold text-gray-90">{driveDistance}km</span>
        <p>통행료 약 {toll}원~</p>
        <p>택시비 약 {taxiToll}원~</p>
      </div>
      {parking && (
        <div className="flex gap-1 rounded-2xl bg-sub-10 py-3 px-4 items-start">
          <img src="/icon/parking.svg" alt="parking" className="mt-[2px]" />
          <div className="flex flex-col gap-[2px] text-md font-bold text-gray-60">
            <p>{parking.name}</p>
            <p className="text-sm font-medium">역에서 {parking.distance}m</p>
          </div>
        </div>
      )}
    </section>
  );
};
