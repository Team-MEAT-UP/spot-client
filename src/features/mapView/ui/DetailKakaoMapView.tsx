import { useEffect, useRef, useState } from "react";
import { MeetingMarker } from "./MeetingMarker";
import { MapMarker } from "./MapMarker";
import { mockMapData } from "@/shared/model";

export const DetailKakaoMapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  const user = mockMapData.users.find(u => u.id === "user_001");

  const pathPoints =
    user?.transferInfo.flatMap(
      info =>
        info.stations?.map(station => ({
          latitude: station.latitude,
          longitude: station.longitude,
          name: station.name,
        })) ?? []
    ) ?? [];

  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) return;

      window.kakao.maps.load(() => {
        if (!mapRef.current || pathPoints.length === 0) return;

        const center = pathPoints[Math.floor(pathPoints.length / 2)];
        const centerLatLng = new kakao.maps.LatLng(center.latitude, center.longitude);

        const kakaoMap = new kakao.maps.Map(mapRef.current, {
          center: centerLatLng,
          level: 5,
        });

        setMap(kakaoMap);

        const linePath = pathPoints.map(p => new kakao.maps.LatLng(p.latitude, p.longitude));

        const bounds = new kakao.maps.LatLngBounds();
        linePath.forEach(latlng => bounds.extend(latlng));
        kakaoMap.setBounds(bounds);

        // 경로 선 그리기 - 두 겹
        // 1. 흰색 테두리용 선 (먼저 그림)
        new kakao.maps.Polyline({
          path: linePath,
          strokeWeight: 8, // 더 두껍게
          strokeColor: "#FFFFFF", // 테두리 색상
          strokeOpacity: 1,
          strokeStyle: "solid",
          map: kakaoMap,
        });

        // 2. 실제 경로 선 (위에 겹쳐 그림)
        new kakao.maps.Polyline({
          path: linePath,
          strokeWeight: 4,
          strokeColor: "#007AFF", // 실제 색상
          strokeOpacity: 0.9,
          strokeStyle: "solid",
          map: kakaoMap,
        });
      });
    };

    if (document.getElementById("kakao-map-script")) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.id = "kakao-map-script";
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
      }&autoload=false`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "calc(100vh - 48px - 20vh)",
      }}>
      {map && (
        <>
          {/* 중간지점 마커 */}
          <MeetingMarker
            map={map}
            position={{
              lat: mockMapData.meetingPoint.latitude,
              lng: mockMapData.meetingPoint.longitude,
            }}
            title={mockMapData.meetingPoint.stationName}
          />
          {/* 사용자 마커 */}
          <MapMarker
            key={mockMapData.users[0].id}
            map={map}
            position={{ lat: mockMapData.users[0].latitude, lng: mockMapData.users[0].longitude }}
            profileImg={mockMapData.users[0].profileImg}
            name={mockMapData.users[0].name}
          />
        </>
      )}
    </div>
  );
};
