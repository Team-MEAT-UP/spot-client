import { getLocationInfo } from "../service/coord2Address";
import { useFindStore } from "@/shared/stores";
import { loadKakaoMapSdk } from "@/shared/utils";
import { Dispatch, SetStateAction } from "react";

interface GetLocationButtonProps {
  setValue: Dispatch<SetStateAction<string>>;
}

export const GetLocationButton = ({ setValue }: GetLocationButtonProps) => {
  const { setStartPointInfo, name } = useFindStore();

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
      className="flex gap-2 w-full h-14 justify-center items-center bg-gray-100 text-gray-50 text-md font-semibold rounded-2xl">
      <img src="/icon/location.svg" alt="현재 위치" className="w-5 h-5" />현 위치 불러오기
    </button>
  );
};
