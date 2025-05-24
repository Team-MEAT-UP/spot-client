import api from "@/shared/api/api";
import { NonVisitedReviewRequest } from "../model";

export const postNonVisitedReview = async (placeId: string, data: NonVisitedReviewRequest) => {
  const response = await api.post(`/places/${placeId}/reviews/non-visited`, data);

  if (response.data.result === "SUCCESS") {
    return response.data.data;
  }

  throw new Error(response.data.error?.message || "미방문 리뷰 작성 실패");
};
