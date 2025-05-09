import { useState } from "react";
import { CarDetail } from "./TransferDetail";
import { FixedButton, Path, TransferDetail } from "./DetailBottomSheet";
import { TransferInfo, TransferType } from "../model";
import { SnapBottomSheet } from "@/shared/ui";
import { mockMapData } from "@/shared/model";

const transferInfo: TransferInfo[] = [
  {
    type: "walk",
    startBoard: "2번 출구",
    endBoard: "교대역2번출구 정류장",
    distance: 535,
    duration: 4,
  },
  {
    type: "bus",
    startBoard: "정류장",
    endBoard: "서울대입구역",
    stationsCnt: 6,
    stations: [],
    bus: ["202", "302"],
    duration: 15,
  },
] as const;

export const MapDetailBottomSheet = () => {
  const [type, setType] = useState<TransferType>("subway");

  return (
    <>
      <SnapBottomSheet minHeightVh={20}>
        <SnapBottomSheet.Header />
        <TransferDetail
          type={type}
          averageDuration={37}
          startPoint={mockMapData.users[0].startStation}
          endPoint={mockMapData.users[0].destination}
        />
        <SnapBottomSheet.Content>
          {type === "subway" ? (
            <Path
              startPoint={mockMapData.users[0].startStation}
              endPoint={mockMapData.users[0].destination}
              transferInfo={transferInfo}
            />
          ) : (
            <CarDetail
              driveDistance={37}
              toll="8,000"
              taxiToll="27,00"
              parking={{ name: "잠원동방음언덕형 공영주차장", distance: 40 }}
            />
          )}
          <FixedButton type={type} setType={setType} />
        </SnapBottomSheet.Content>
      </SnapBottomSheet>
    </>
  );
};
