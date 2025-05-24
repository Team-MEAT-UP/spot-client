import { useNavigate } from "react-router-dom";
import { Chip } from "./Chip";
import Pin from "@/assets/icon/pin.svg";
import DefaultProfile from "@/assets/icon/default-profile.svg";
import { UserEventHistoryResponses } from "../model";
import { formatDaysAgo } from "../utils";

export const GroupCard = ({
  eventId,
  middlePointName,
  placeName,
  participatedPeopleCount,
  userProfileImageUrls,
  eventMadeAgo,
  eventHourAgo,
  isReviewed,
}: UserEventHistoryResponses) => {
  const navigate = useNavigate();

  const maxToShow = 3;

  // 참여 인원 수만큼 순회, 최대 3명 제한
  const displayImages = Array.from({ length: Math.min(participatedPeopleCount, maxToShow) }, (_, i) => {
    return userProfileImageUrls[i] || DefaultProfile;
  });

  const handleClick = () => {
    navigate(`/mapView/${eventId}`);
  };

  const eventAgoText = eventMadeAgo === 0 ? `${eventHourAgo}시간 전` : formatDaysAgo(eventMadeAgo);

  return (
    <section className="flex flex-col px-5 pb-5 pt-4 gap-1 border-b border-b-gray-5">
      <div className="cursor-pointer" onClick={handleClick}>
        <span className="text-md font-semibold text-gray-90">{middlePointName}</span>
        <div className="flex gap-1 items-center text-sm font-medium text-gray-40 overflow-hidden text-ellipsis whitespace-nowrap">
          {placeName ? (
            <>
              <img src={Pin} alt="pin" className="w-4 h-4" />
              <p>{placeName}</p>
            </>
          ) : (
            <p>아직 장소가 정해지지 않았어요</p>
          )}
        </div>
      </div>
      <div className="flex mt-1 items-center justify-between">
        <div className="flex gap-1 text-xs font-medium items-center">
          {/* 이미지 영역 */}
          <div className="flex items-center">
            {displayImages.map((src, index) => {
              const zIndex = 30 - index * 10;
              const marginClass = index === 0 ? "" : "-ml-[7px]";
              return (
                <img
                  key={index}
                  src={src}
                  alt="profileImg"
                  className={`w-[21px] h-[21px] rounded-full border border-white ${marginClass}`}
                  style={{ zIndex }}
                />
              );
            })}
          </div>

          <p className="text-gray-90">{participatedPeopleCount}명</p>
          <p className="font-semibold text-gray-40">·</p>
          <p className="text-gray-40">{eventAgoText}</p>
        </div>
        {placeName && <Chip isComplete={isReviewed} id={eventId} />}
      </div>
    </section>
  );
};
