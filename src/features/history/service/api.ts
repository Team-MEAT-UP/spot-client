import api from "@/shared/api/api";

export const getUserInfo = async () => {
  try {
    const response = await api.get("/users");
    if (response.data.result === "SUCCESS") {
      return response.data;
    } else {
      console.error("서버 에러 발생", response.data.error.message);
      return null;
    }
  } catch (error) {
    console.error("유저 정보 조회 실패: ", error);
    throw error;
  }
};

export const storeAgreement = async (isPersonalInfoAgreement: boolean, isMarketingAgreement: boolean) => {
  try {
    const response = await api.post("/users/agreement", { isPersonalInfoAgreement, isMarketingAgreement });

    if (response.data.result === "SUCCESS") {
      return true;
    } else {
      console.error("서버 에러 발생", response.data.error.message);
      return false;
    }
  } catch (error) {
    console.error("약관 동의 저장 실패: ", error);
    return false;
  }
};
