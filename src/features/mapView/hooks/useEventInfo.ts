import { useQuery } from "@tanstack/react-query";
import { getCookie } from "@/shared/utils";
import { getEventInfo } from "../service";
import { useParams } from "react-router-dom";
import { useUserStore } from "@/shared/stores";

export const useEventRoutes = () => {
  const { id } = useParams();
  const guestId = getCookie("guestId");
  const { nickname } = useUserStore();

  return useQuery({
    queryKey: ["eventRoutes", id, guestId, nickname],
    queryFn: () => {
      if (!id) throw new Error("eventId가 없습니다.");
      // 로그인한 사용자인 경우 guestId를 전달하지 않음
      return getEventInfo(id, nickname ? undefined : guestId);
    },
    enabled: !!id, // eventId가 있을 때만 요청
    retry: false, // 자동 재시도 방지
  });
};
