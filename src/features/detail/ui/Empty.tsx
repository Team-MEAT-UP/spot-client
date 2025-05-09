export const Empty = () => {
  return (
    <div className="p-5 pt-[26px] flex flex-col items-center">
      <img src="/icon/emptyDetail.svg" alt="empty" />
      <span className="mt-4 text-md font-semibold text-gray-40">아직 후기가 없어요</span>
      <p className="text-sm font-medium text-gray-30">
        해당 가게를 방문 후 후기를 남겨주시면
        <br /> 다른 방문자들에게 큰 도움이 될거에요
      </p>
    </div>
  );
};
