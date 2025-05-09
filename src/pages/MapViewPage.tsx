import {
  AddMemberBottomSheet,
  DetailKakaoMapView,
  KakaoMapView,
  MapDetailBottomSheet,
  MapHeader,
  SnapMapBottomSheet,
  TooCloseSheet,
} from "@/features/mapView/ui";
import { useState } from "react";

const MapViewPage = () => {
  const isDetail = false; // 임시 작업
  const openDetailBottomSheet = true; // 임시 작업
  const memberCount = 2; // 임시 인원 설정

  const [midpointError, setMidpointError] = useState(false); // 중간지점 산출 실패 상태
  void setMidpointError; // 빌드에러 방지를 위한 임시 처리

  return (
    <div>
      <MapHeader />
      {midpointError ? (
        <TooCloseSheet />
      ) : isDetail ? (
        <>
          <DetailKakaoMapView />
          {openDetailBottomSheet && <MapDetailBottomSheet />}
        </>
      ) : (
        <>
          <KakaoMapView />
          {memberCount >= 2 ? <SnapMapBottomSheet /> : <AddMemberBottomSheet />}
        </>
      )}
    </div>
  );
};

export default MapViewPage;
