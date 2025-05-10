import { getUserInfo } from "@/features/history/service";
import { Banner, Empty, Header, GroupCard, PolicyBottomSheet } from "@/features/history/ui";
import { mockListData } from "@/shared/model";
import { useUserStore } from "@/shared/stores";
import { useEffect, useState } from "react";

const HistoryPage = () => {
  const [isPolicy, setIsPolicy] = useState(false);
  const { profileImageUrl } = useUserStore();
  const length = 1; // 임시 ui 구현을 위한 작업!

  const onClose = () => {
    setIsPolicy(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserInfo();
      if (response.data) {
        useUserStore.setState({
          nickname: response.data.nickname,
          profileImageUrl: response.data.profileImageUrl,
        });
        setIsPolicy(!response.data.personalInfoAgreement);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen-dvh">
      <div className="flex flex-col px-5 gap-2">
        <Header profileImg={profileImageUrl} />
        <Banner />
        <span className="mt-4 py-3 text-lg font-bold">나의 모임</span>
      </div>
      {length > 0 ? (
        <div>
          {mockListData.map(data => (
            <GroupCard key={data.id} {...data} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
      {isPolicy && <PolicyBottomSheet onClose={onClose} />}
    </div>
  );
};

export default HistoryPage;
