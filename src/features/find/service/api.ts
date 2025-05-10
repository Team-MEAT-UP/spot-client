import api from "@/shared/api/api";
import { StartPointResponse } from "../model";
import { FormattedData } from "@/shared/stores";

interface SearchStartPointParams {
  textQuery: string;
}

export const searchStartPoints = async (params: SearchStartPointParams): Promise<StartPointResponse> => {
  const response = await api.get<StartPointResponse>("/start-points/search", {
    params: { textQuery: params.textQuery },
  });
  return response.data;
};

export const createEvent = async (payload: FormattedData) => {
  try {
    const response = await api.post("/events", payload);
    return response.data;
  } catch (error) {
    console.error("모임 생성 실패:", error);
    throw error;
  }
};

export const addMember = async (payload: FormattedData, eventId: string) => {
  try {
    const response = await api.post(`/events/${eventId}/start-points`, payload);
    return response.data;
  } catch (error) {
    console.log("멤버 추가 실패", error);
    throw error;
  }
};
