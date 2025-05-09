import { useMapStore } from "@/shared/stores";
import { UserCard } from "./UserCard";
import { useState } from "react";
import { LoginModal } from ".";
import { ShareModal } from "@/shared/ui";

export const BottomSheetContent = () => {
  const { users, meetingPoint } = useMapStore();

  return (
    <div className="h-full flex flex-col">
      <div className="mx-5">
        <div>
          <h1 className="text-gray-80 text-lg font-bold">{meetingPoint.stationName}</h1>
          <p className="text-gray-40 text-md">{meetingPoint.averageDuration}</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto mx-5 pb-[80px] scrollbar-hidden" data-scrollable="true">
        {users.map(user => (
          <UserCard key={user.id} name={user.name} startStation={user.startStation} totalTime={user.totalTime} />
        ))}
      </div>
    </div>
  );
};

export const FixedButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false); // 추후 로그인 상태인지 검증하는 로직 구현예정
  const shareContent = {
    title: "님이 모임을 생성했어요",
    description: "",
    imageUrl: "https://meetup-client-silk.vercel.app/image/main.png",
    links: [
      { label: "내 출발지 입력하기", url: "https://meetup-client-silk.vercel.app/find" },
      { label: "우리 모임의 중간지점은?", url: "https://meetup-client-silk.vercel.app/mapView" },
    ],
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-5">
      <div className="flex flex-row gap-2">
        <button
          className="flex flex-row items-center justify-center gap-2 rounded-md bg-sub-sub h-[40px] text-white font-semibold text-sm w-full"
          onClick={() => setIsOpenLoginModal(true)}>
          <img src="./icon/addUser.svg" alt="addUser" />
          <span>멤버 추가하기</span>
        </button>
        <button className="flex justify-center items-center bg-gray-5 w-[40px] h-[40px] rounded-md">
          <img src="./icon/share.svg" alt="share" onClick={() => setIsOpen(true)} />
        </button>
      </div>
      {isOpen && (
        <ShareModal
          onClose={() => setIsOpen(false)}
          title="링크 공유하기"
          description="멤버가 출발지를 직접 입력할 수 있어요"
          shareContent={shareContent}
        />
      )}
      {isOpenLoginModal && <LoginModal />}
    </div>
  );
};
