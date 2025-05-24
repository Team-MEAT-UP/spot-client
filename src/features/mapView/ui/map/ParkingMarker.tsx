import { useEffect } from "react";
import Parking from "@/assets/icon/parking.svg";

interface ParkingMarkerProps {
  map: kakao.maps.Map;
  position: { lat: number; lng: number };
}

export const ParkingMarker = ({ map, position }: ParkingMarkerProps) => {
  useEffect(() => {
    if (!map) return;

    const markerPosition = new kakao.maps.LatLng(position.lat, position.lng);

    const markerImage = new kakao.maps.MarkerImage(
      Parking, // 이미지 경로
      new kakao.maps.Size(20, 20) // 이미지 크기
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
      map,
    });

    return () => {
      marker.setMap(null);
    };
  }, [map, position]);

  return null;
};
