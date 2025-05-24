import PlaceCard from "@/shared/ui/PlaceCard";
import Confirmed from "@/assets/icon/confirmed.svg";
import { PlaceScore } from "@/shared/model";

interface ConfirmedCardProps {
  name: string;
  distance: number;
  image?: string;
  openTime?: string;
  closeTime?: string;
  averageRating?: number | null;
  placeScore?: PlaceScore | null;
  onClick: () => void;
}

export const ConfirmedCard = ({
  name,
  distance,
  image,
  openTime,
  closeTime,
  averageRating,
  placeScore,
  onClick,
}: ConfirmedCardProps) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <div className="absolute -top-3 right-1">
        <img src={Confirmed} alt="Confirmed" className="w-24 h-24" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold">
          <span className="text-sub-sub">{name}</span> <br />
          <span>약속장소가 확정됐어요</span>
        </h1>
      </div>
      <div className="relative mt-[12px] border-[1.5px] border-sub-sub rounded-2xl">
        <PlaceCard
          name={name}
          distance={distance}
          image={image}
          openTime={openTime}
          closeTime={closeTime}
          averageRating={averageRating}
          placeScore={placeScore}
        />
      </div>
    </div>
  );
};
