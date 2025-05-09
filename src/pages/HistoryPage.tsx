import { Banner, Empty, Header, GroupCard, PolicyBottomSheet } from "@/features/history/ui";
import { mockListData } from "@/shared/model";
import { useState } from "react";

const HistoryPage = () => {
  const length = 1; // 임시 ui 구현을 위한 작업!
  const [isPolicy, setIsPolicy] = useState(true);

  const handleClick = () => {
    setIsPolicy(false);
  };

  return (
    <div className="flex flex-col h-screen-dvh">
      <div className="flex flex-col px-5 gap-2">
        <Header profileImg="https://github.com/shadcn.png" />
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
      {isPolicy && <PolicyBottomSheet onClose={handleClick} />}
    </div>
  );
};

export default HistoryPage;
