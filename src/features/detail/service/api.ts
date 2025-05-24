import api from "@/shared/api/api";

interface PlaceInfoProps {
  placeId: string;
  eventId: string;
}

export const getPlaceInfo = async ({ placeId, eventId }: PlaceInfoProps) => {
  const response = await api.get(`/places/${placeId}`, {
    params: { placeId, eventId },
  });

  if (response.data.result === "SUCCESS") {
    return response.data.data;
  }

  throw new Error(response.data.error?.message || "모임 장소 조회 실패");
};

export const postPlaceInfo = async ({ placeId, eventId }: PlaceInfoProps) => {
  const response = await api.post(`/places/${placeId}`, null, { params: { placeId, eventId } });

  if (response.data.result === "SUCCESS") {
    return true;
  }

  throw new Error(response.data.error?.message || "모임 장소 확정 실패");
};
