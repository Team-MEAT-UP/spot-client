import { useMutation } from "@tanstack/react-query";
import { VisitedReviewPayload } from "../model";
import { postVisitedReview } from "../service";

export const usePostVisitedReview = (placeId: string) => {
  return useMutation({
    mutationFn: (payload: VisitedReviewPayload) => postVisitedReview(placeId, payload),
    onError: error => {
      console.error("리뷰 작성 실패", error);
    },
  });
};
