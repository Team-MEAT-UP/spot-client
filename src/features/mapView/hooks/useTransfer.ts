import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchEvent } from "../service";
import { getCookie } from "@/shared/utils";
import { useParams } from "react-router-dom";

export const useTransfer = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const startPointId = getCookie("startPointId");

  return useMutation({
    mutationFn: ({ isTransit }: { isTransit: boolean }) => patchEvent(id as string, startPointId as string, isTransit),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["eventRoutes"],
      });
    },
    onError: (error: any) => {
      console.error("대중교통 변경 실패:", error.message);
    },
  });
};
