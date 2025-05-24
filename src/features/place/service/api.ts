import api from "@/shared/api/api";
import { PlaceList } from "../model";

export const getRecommendedPlaces = async (eventId: string) => {
  const response = await api.get<PlaceList>("/places", {
    params: { eventId },
  });

  if (response.data.result === "SUCCESS") {
    return response.data;
  }

  throw new Error(response.data.error?.message || "추천 장소 조회 실패");
};
