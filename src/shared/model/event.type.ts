export interface MeetingPoint {
  endStationName: string;
  endLongitude: number;
  endLatitude: number;
}

export interface TransitRoute {
  trafficType: string;
  distance: number;
  sectionTime: number;
  stationCount: number;

  // type에 따른 선택적 필드들
  startExitNo?: string;
  endExitNo?: string;
  laneName?: string;
  startBoardName?: string;
  endBoardName?: string;
  passStopList?: {
    stations: {
      index: number;
      stationName: string;
      x: string;
      y: string;
    }[];
  };
}

export interface DrivingInfo {
  taxi: number;
  toll: number;
  duration: number;
  distance: number;
}

export interface DrivingRoute {
  name: string;
  coordinates: {
    x: string;
    y: string;
  }[];
}

export interface RouteResponse {
  isTransit: boolean;
  isMe: boolean;
  id: string;
  nickname: string;
  profileImage: string | null;
  startName: string;
  startLongitude: number;
  startLatitude: number;
  transitRoute: TransitRoute[];
  transitTime: number;
  driveTime: number;
  drivingInfo: DrivingInfo;
  drivingRoute: DrivingRoute[];
  totalTime: number;
  guestId: string;
}

export interface ParkingLot {
  name: string;
  distance: number;
  latitude: number;
  longitude: number;
}

export interface GetEventRouteResponse {
  eventMaker: string;
  peopleCount: number;
  averageTime: number;
  meetingPoint: MeetingPoint;
  routeResponse: RouteResponse[];
  parkingLot: ParkingLot;
}
