import { useUserEvents, useUserInfo } from "@/features/history/hooks";
import { Empty, Header, GroupCard, PolicyBottomSheet } from "@/features/history/ui";
import { useUserStore } from "@/shared/stores";
import Button from "@/shared/ui/Button";
import LoadingSpinner from "@/shared/ui/LoadingSpinner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HistoryPage = () => {
  const { data, isLoading, isError } = useUserInfo();
  const { userEvents, isEventsLoading, isEventsError } = useUserEvents();
  const [isPolicy, setIsPolicy] = useState(false);
  const profileImageUrl = useUserStore(state => state.profileImageUrl);
  const length = 1; // 임시 ui 구현을 위한 작업!
  const navigate = useNavigate();

  const onClose = () => {
    setIsPolicy(false);
  };

  const handleClick = () => {
    navigate("/find?startStep=1");
  };

  useEffect(() => {
    if (!data) return;

    // 데이터가 로드된 후 사용자 정보 저장
    useUserStore.setState({
      nickname: data.nickname,
      profileImageUrl: data.profileImageUrl,
      email: data.email,
    });

    // 개인정보 동의 여부 설정
    setIsPolicy(!data.personalInfoAgreement);

    // localStorage에서 이벤트 아이디를 가져와 리디렉션 처리
    const eventIdFromStorage = localStorage.getItem("shared_link_access");

    if (eventIdFromStorage) {
      localStorage.removeItem("shared_link_access"); // 리디렉션 전 로컬스토리지 비우기
      navigate(`/find?eventId=${eventIdFromStorage}&startStep=1`);
      return; // 여기서 리턴하지 않으면 아래 조건이 동시에 실행됨
    }

    // 만약 이메일이 없으면 메인 페이지로 리다이렉트
    if (!data.email) {
      navigate("/");
    }
  }, [data, navigate]);

  if (isLoading || isEventsLoading)
    return (
      <div className="flex flex-col items-center justify-center gap-3 h-screen-dvh">
        <LoadingSpinner />
        <p>로딩 중...</p>
      </div>
    );
  if (isError || isEventsError) return <p>유저 정보를 가져오는 데 실패했습니다.</p>;

  return (
    <div className="relative flex flex-col h-screen-dvh">
      <div className="flex flex-col px-5">
        <Header profileImg={profileImageUrl} />
        <span className="pt-3 pb-2 text-xl font-bold">나의 모임</span>
      </div>
      {length > 0 ? (
        <div className="flex flex-col overflow-y-scroll scrollbar-hidden mb-24">
          {userEvents && userEvents.map(data => <GroupCard key={data.eventId} {...data} />)}
        </div>
      ) : (
        <Empty />
      )}
      <div className="px-5 pt-4 pb-5 w-full fixed bottom-0 max-w-[600px] z-[100] bg-white">
        <Button onClick={handleClick} isBlue={true}>
          모임 만들기
        </Button>
      </div>
      {isPolicy && <PolicyBottomSheet onClose={onClose} />}
    </div>
  );
};

export default HistoryPage;
