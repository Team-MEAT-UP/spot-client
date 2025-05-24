export interface VisitedPlaceProps {
  name: string;
  latitude: number;
  longitude: number;
  roadAddress: string;
  regionName: string;
}

export interface NonVisitedReviewRequest {
  categories: string[];
  etcReason: string;
  placeName: string;
  address: string;
  roadAddress: string;
  longitude: number;
  latitude: number;
}

export type NonVisitedReasonCategory = "NOISY" | "CONGESTION" | "DARKNESS" | "INSUFFICIENT_SEAT";
