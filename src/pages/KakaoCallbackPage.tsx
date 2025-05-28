import { useUserInfo } from "@/features/history/hooks";
import { useUserStore } from "@/shared/stores";
import LoadingSpinner from "@/shared/ui/LoadingSpinner";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const KakaoCallbackPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { data, isLoading, isError } = useUserInfo();

  useEffect(() => {
    if (!data) return;

    useUserStore.setState({
      nickname: data.nickname,
      profileImageUrl: data.profileImageUrl,
      email: data.email,
      personalInfoAgreement: data.personalInfoAgreement,
    });

    const to = searchParams.get("to");
    const eventId = searchParams.get("eventId");

    const isInvalidEventId = !eventId || eventId === "undefined";

    if (isInvalidEventId) {
      navigate(`/${to}`);
    } else if (to === "find") {
      navigate(`/find?eventId=${eventId}&startStep=1`);
    } else {
      navigate(`/${to}/${eventId}`);
    }
  }, [data, navigate, searchParams]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 h-screen-dvh">
        <LoadingSpinner />
        <p>로딩 중...</p>
      </div>
    );
  }

  if (isError) {
    return <p>로그인 중 문제가 발생했습니다. 다시 시도해주세요.</p>;
  }

  return null;
};

export default KakaoCallbackPage;
