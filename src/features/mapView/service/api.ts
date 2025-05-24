import api from "@/shared/api/api";
import { GetEventRouteResponse } from "@/shared/model";

export const getEventInfo = async (eventId: string, startPointId?: string) => {
  const response = await api.get<{
    result: string;
    data: GetEventRouteResponse;
    error?: {
      code: string;
      message: string;
    };
  }>(`/events/${eventId}`, {
    params: startPointId ? { startPointId } : {},
  });

  if (response.data.result === "SUCCESS") {
    return response.data.data;
  }

  throw new Error(response.data.error?.message || "모임 경로 조회 실패");
};

export const patchEvent = async (eventId: string, startPointId: string, isTransit: boolean) => {
  const response = await api.patch(`/events/${eventId}`, null, {
    params: {
      startPointId,
      isTransit,
    },
  });

  if (response.data.result === "SUCCESS") {
    return true;
  }

  throw new Error(response.data.error?.message || "대중교통 변경 실패");
};
