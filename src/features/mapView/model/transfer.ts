export type TransferInfo = SubwayTransfer | BusTransfer | WalkTransfer;

export type TransferType = "subway" | "car";

export interface BaseTransfer {
  type: "subway" | "bus" | "walk";
  startBoard?: string;
  endBoard: string;
  duration: number;
}

interface Stations {
  name: string;
  latitude: string;
  longitude: string;
}

export interface SubwayTransfer extends BaseTransfer {
  type: "subway";
  line: string;
  stationsCnt: number;
  stations: Stations[];
}

export interface BusTransfer extends BaseTransfer {
  type: "bus";
  bus: string[];
  stationsCnt: number;
  stations: Stations[];
}

export interface WalkTransfer extends BaseTransfer {
  type: "walk";
  distance: number;
}
