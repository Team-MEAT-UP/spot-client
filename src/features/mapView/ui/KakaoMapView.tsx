import { useEffect, useRef, useState } from "react";
import { MeetingMarker } from "./MeetingMarker";
import { mockMapData } from "@/shared/model";
import { MapMarker } from "./MapMarker";

export function KakaoMapView() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [center, setCenter] = useState<kakao.maps.LatLng | null>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) return;

      window.kakao.maps.load(() => {
        if (mapRef.current) {
          const centerLatLng = new window.kakao.maps.LatLng(
            mockMapData.meetingPoint.latitude,
            mockMapData.meetingPoint.longitude
          );
          setCenter(centerLatLng);

          const options = {
            center: centerLatLng,
            level: 3,
          };

          const kakaoMap = new window.kakao.maps.Map(mapRef.current, options);
          setMap(kakaoMap);

          const bounds = new window.kakao.maps.LatLngBounds();

          // 중간지점 bounds 설정
          bounds.extend(centerLatLng);

          // 사용자 위치 bounds 설정
          mockMapData.users.forEach(user => {
            bounds.extend(new window.kakao.maps.LatLng(user.latitude, user.longitude));
          });

          kakaoMap.setBounds(bounds);
        }
      });
    };

    if (document.getElementById("kakao-map-script")) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.id = "kakao-map-script";
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
      }&autoload=false&libraries=services,clusterer`;
      script.async = true;
      script.onload = () => {
        initializeMap();
      };
      document.head.appendChild(script);
    }
  }, []);

  const drawPolylines = () => {
    if (!map || !center) return;

    if (window.polylines) {
      window.polylines.forEach((polyline: kakao.maps.Polyline) => {
        polyline.setMap(null);
      });
    }

    window.polylines = [];

    mockMapData.users.forEach(user => {
      const markerLatLng = new window.kakao.maps.LatLng(user.latitude, user.longitude);

      // 1. 흰색 테두리용 선 (먼저 그림)
      const borderLine = new window.kakao.maps.Polyline({
        path: [markerLatLng, center],
        strokeWeight: 8, // 원래보다 굵게
        strokeColor: "#FFF", // 테두리 색상
        strokeOpacity: 1,
        strokeStyle: "solid",
        map: map,
      });

      // 2. 실제 선 (위에 겹쳐 그림)
      const mainLine = new window.kakao.maps.Polyline({
        path: [markerLatLng, center],
        strokeWeight: 4,
        strokeColor: "#9494A8",
        strokeOpacity: 0.7,
        strokeStyle: "solid",
        map: map,
      });

      window.polylines.push(borderLine, mainLine);
    });
  };

  useEffect(() => {
    drawPolylines();
  }, [map, center]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "calc(100vh - 48px - 34vh)",
        position: "fixed",
        top: "48px",
        left: 0,
        zIndex: 0,
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
          {mockMapData.users.map(user => (
            <MapMarker
              key={user.id}
              map={map}
              position={{ lat: user.latitude, lng: user.longitude }}
              profileImg={user.profileImg}
              name={user.name}
            />
          ))}
        </>
      )}
    </div>
  );
}
