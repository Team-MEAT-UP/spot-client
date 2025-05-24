import { useMutation } from "@tanstack/react-query";
import { NonVisitedReviewRequest } from "../model";
import { postNonVisitedReview } from "../service";

export const usePostNonVisitedReview = () => {
  return useMutation({
    mutationFn: ({ placeId, data }: { placeId: string; data: NonVisitedReviewRequest }) =>
      postNonVisitedReview(placeId, data),
  });
};
