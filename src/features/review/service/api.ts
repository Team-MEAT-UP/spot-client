import api from "@/shared/api/api";
import { ReviewPlaceResponse } from "../model";

export const getReviewPlace = async (eventId: string): Promise<ReviewPlaceResponse> => {
  const response = await api.get("/places/review", {
    params: { eventId },
  });

  if (response.data.result === "SUCCESS") {
    return response.data.data;
  }

  throw new Error(response.data.error?.message || "장소 조회 실패");
};
