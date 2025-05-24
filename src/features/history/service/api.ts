import api from "@/shared/api/api";

export const getUserInfo = async () => {
  const response = await api.get("/users");

  if (response.data.result === "SUCCESS") {
    return response.data.data;
  }
};

export const storeUserAgreement = async ({
  isPersonalInfoAgreement,
  isMarketingAgreement,
}: {
  isPersonalInfoAgreement: boolean;
  isMarketingAgreement: boolean;
}) => {
  const response = await api.post("/users/agreement", {
    isPersonalInfoAgreement,
    isMarketingAgreement,
  });

  if (response.data.result === "SUCCESS") {
    return true;
  }

  throw new Error(response.data.error?.message || "약관 동의 저장장 실패");
};

export const getUserEvents = async () => {
  const response = await api.get("/users/events");

  if (response.data.result === "SUCCESS") {
    return response.data.data;
  }

  throw new Error(response.data.error?.message || "유저 정보 조회 실패");
};
