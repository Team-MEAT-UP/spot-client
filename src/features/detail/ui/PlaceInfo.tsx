import Pin from "@/assets/icon/pinBlue.svg";
import Star from "@/assets/icon/star.svg";
import Time from "@/assets/icon/time.svg";
import Arrow from "@/assets/icon/rightArrowGray.svg";

interface PlaceInfoProps {
  placeId: string;
  distance: number;
  name: string;
  averageRating: number | null;
  openTime: string | null;
  closeTime: string | null;
}

export const PlaceInfo = ({ placeId, distance, name, averageRating, openTime, closeTime }: PlaceInfoProps) => {
  const handleClickKakao = () => {
    const kakaoMapUrl = `https://place.map.kakao.com/${placeId}`;
    window.open(kakaoMapUrl, "_blank");
  };

  return (
    <div className="flex flex-col">
      <div className="p-5 flex flex-col gap-1">
        <div className="flex py-[2px] px-[6px] gap-1 items-center rounded-[4px] bg-sub-10 w-fit text-xs font-semibold text-sub-sub">
          <img src={Pin} alt="pin" className="w-[14px] h-[14px]" />
          역에서 {distance}m
        </div>
        <div>
          <span className="text-xl font-semibold text-gray-90">{name}</span>
          <div className="flex items-center gap-[2px]">
            <img src={Star} alt="star" className="w-5 h-5" />
            <p className="text-md font-semibold text-gray-80">{averageRating ?? 0}</p>
          </div>
        </div>
        {(openTime || closeTime) && (
          <div className="flex justify-between">
            <div className="flex items-center gap-1 text-sm font-medium">
              <img src={Time} alt="time" className="w-[14px] h-[14px]" />
              <p className="text-gray-50">영업시간</p>
              <p className="text-gray-80 ml-1">
                {openTime} ~ {closeTime}
              </p>
            </div>
          </div>
        )}
      </div>
      <div
        className="px-5 py-3 flex gap-[6px] items-center text-sm font-medium text-gray-30 cursor-pointer border-t border-t-gray-5"
        onClick={handleClickKakao}>
        카카오맵에서 보기
        <img src={Arrow} alt="arrow" className="w-4 h-4" />
      </div>
    </div>
  );
};
