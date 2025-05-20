export interface PlaceScore {
  socket: number;
  seat: number;
  quiet: number;
}

export interface PlaceResponse {
  id: string;
  category: string;
  name: string;
  image?: string;
  openTime?: string;
  closeTime?: string;
  distance: number;
  averageRating: number | null;
  placeScore?: PlaceScore | null;
}

export interface PlaceList {
  result: string;
  data: {
    middlePointName: string;
    subwayId: number;
    confirmedPlaceResponse: PlaceResponse | null;
    placeResponses: PlaceResponse[];
  };
  error: string | null;
}
