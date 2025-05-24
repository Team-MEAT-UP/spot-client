import { PlaceScore } from "@/shared/model";

export interface ReviewType {
  nickname: string;
  profileImage: string | null;
  date: string;
  day: string;
  content: string;
}

export interface PlaceQuietness {
  morning: number | null;
  lunch: number | null;
  night: number | null;
}

export interface PlaceInfo {
  id: string;
  kakaoPlaceId: string;
  category: string;
  name: string;
  images: string[];
  openTime: string;
  closeTime: string;
  distance: number;
  averageRating: number;
  placeQuietnessResponse: PlaceQuietness;
  placeScore: PlaceScore;
  reviews: ReviewType[];
  googleReviews: ReviewType[];
  isConfirmed: boolean;
  isChanged: boolean;
}
