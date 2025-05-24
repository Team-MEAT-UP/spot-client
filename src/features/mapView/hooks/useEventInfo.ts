import { useQuery } from "@tanstack/react-query";
import { getCookie } from "@/shared/utils";
import { getEventInfo } from "../service";
import { useParams } from "react-router-dom";

export const useEventRoutes = () => {
  const { id } = useParams();
  const startPointId = getCookie("startPointId");

  return useQuery({
    queryKey: ["eventRoutes", id, startPointId],
    queryFn: () => {
      if (!id) throw new Error("eventId가 없습니다.");
      return getEventInfo(id, startPointId);
    },
    enabled: !!id, // eventId가 있을 때만 요청
    retry: false, // 자동 재시도 방지
  });
};
