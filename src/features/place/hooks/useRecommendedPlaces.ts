import { useQuery } from "@tanstack/react-query";
import { getRecommendedPlaces } from "../service";

export const useRecommendedPlaces = (eventId: string) => {
  return useQuery({
    queryKey: ["recommendedPlaces", eventId],
    queryFn: () => getRecommendedPlaces(eventId),
    enabled: !!eventId,
    retry: 2,
  });
};
