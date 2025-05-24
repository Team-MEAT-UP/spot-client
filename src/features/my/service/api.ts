import api from "@/shared/api/api";

export const logout = async () => {
  const response = await api.post("/auth/logout");

  if (response.data.result === "SUCCESS") {
    return true;
  }

  throw new Error(response.data.error?.message || "로그아웃 실패");
};
