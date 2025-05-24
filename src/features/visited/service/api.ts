import api from "@/shared/api/api";
import { VisitedReviewPayload } from "../model";

export const postVisitedReview = async (placeId: string, payload: VisitedReviewPayload) => {
  const response = await api.post(`/places/${placeId}/reviews/visited`, payload);

  if (response.data.result === "SUCCESS") {
    return response.data.data;
  }

  throw new Error(response.data.error?.message || "방문 리뷰 작성 실패");
};
