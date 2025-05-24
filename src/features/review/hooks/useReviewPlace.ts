import { useQuery } from "@tanstack/react-query";
import { ReviewPlaceResponse } from "../model";
import { getReviewPlace } from "../service";

export const useReviewPlace = (eventId: string) => {
  return useQuery<ReviewPlaceResponse>({
    queryKey: ["reviewPlace", eventId],
    queryFn: () => getReviewPlace(eventId),
    enabled: !!eventId,
  });
};
