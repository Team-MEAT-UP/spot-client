import { useQuery } from "@tanstack/react-query";
import { getUserEvents } from "../service";
import { UserEvents } from "../model";

export const useUserEvents = () => {
  const {
    data: userEvents,
    isLoading: isEventsLoading,
    isError: isEventsError,
  } = useQuery<UserEvents[]>({
    queryKey: ["userEvents"],
    queryFn: getUserEvents,
    retry: 2, // 실패 시 최대 두 번 재시도
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 캐시 유지
  });
  return { userEvents, isEventsLoading, isEventsError };
};
