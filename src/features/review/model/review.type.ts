import { PlaceScore } from "@/shared/model";

export interface Place {
  id: string;
  category: string;
  name: string;
  image: string;
  openTime: string;
  closeTime: string;
  distance: number;
  averageRating: number;
  googleRating: number;
  placeScore: PlaceScore;
}

export interface ReviewPlaceResponse {
  middlePointName: string;
  confirmedPlaceResponse: Place;
  placeResponses: Place[];
}
