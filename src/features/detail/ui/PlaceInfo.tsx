export const PlaceInfo = () => {
  return (
    <div className="px-5 pt-4 pb-[14px] flex flex-col gap-[6px]">
      <div className="flex py-[2px] px-[6px] gap-1 items-center rounded-[4px] bg-sub-10 w-fit text-xs font-semibold text-sub-sub">
        <img src="/icon/pinBlue.svg" alt="pin" />
        역에서 215m
      </div>
      <div>
        <span className="text-xl font-semibold text-gray-90">스타벅스 방배카페거리점</span>
        <div className="flex items-center gap-[2px]">
          <img src="/icon/star.svg" alt="star" />
          <p className="text-md font-semibold text-gray-80">4.5</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1 text-sm font-medium">
          <img src="/icon/time.svg" alt="time" />
          <p className="text-gray-50">영업시간</p>
          <p className="text-gray-80 ml-1">07:30 ~ 22:00</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => console.log("카카오맵으로 연결")}>
            <img src="/icon/kakaoMap.svg" alt="kakaoMap" />
          </button>
          <button onClick={() => console.log("네이버맵으로 연결")}>
            <img src="/icon/naverMap.svg" alt="naverMap" />
          </button>
        </div>
      </div>
    </div>
  );
};
