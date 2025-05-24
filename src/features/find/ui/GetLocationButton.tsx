import { getLocationInfo } from "../service/coord2Address";
import { loadKakaoMapSdk } from "@/shared/utils";
import { Dispatch, SetStateAction } from "react";
import { StartPointInfo } from "../model";
import Location from "@/assets/icon/location.svg";

interface GetLocationButtonProps {
  setValue: Dispatch<SetStateAction<string>>;
  setStartPointInfo: (info: StartPointInfo) => void;
  name: string;
}

export const GetLocationButton = ({ setValue, setStartPointInfo, name }: GetLocationButtonProps) => {
  const handleGetCurrentLocation = async () => {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        });
      });

      await loadKakaoMapSdk();

      const locationInfo = await getLocationInfo(position.coords.latitude, position.coords.longitude);

      setValue(locationInfo.placeName);

      setStartPointInfo({
        name,
        startPoint: locationInfo.placeName,
        address: locationInfo.address,
        roadAddress: locationInfo.roadAddress,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    } catch (error) {
      console.error("위치 검색 실패", error);
    }
  };

  return (
    <button
      onClick={handleGetCurrentLocation}
      className="flex gap-2 w-full justify-center items-center text-sub-sub text-md font-semibold rounded-2xl">
      <img src={Location} alt="현재 위치" className="w-5 h-5" />현 위치 불러오기
    </button>
  );
};
