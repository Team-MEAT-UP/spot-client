import { useUserStore } from "@/shared/stores";
import { useState } from "react";

//@TODO 백 연동 시 이름, 프로필사진, 이메일 수정
export const Profile = () => {
  const { nickname, setNickname, profileImageUrl } = useUserStore();
  const [isEditting, setIsEditting] = useState(false);

  const handleEditting = () => {
    setIsEditting(true);
  };

  const handleBlur = () => {
    console.log(name);
    setIsEditting(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(name);
      setIsEditting(false);
    }
  };

  return (
    <div className="flex py-3 gap-3 items-center">
      <img src={profileImageUrl} alt="profileImg" className="w-16 h-16 rounded-full" />
      <div className="flex flex-col gap-1 w-full">
        {isEditting ? (
          <input
            type="text"
            className="rounded-none w-full border-b-gray-90 border-b outline-none text-lg font-semibold text-gray-90"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <div className="flex gap-1 items-center">
            <span className="text-lg font-semibold text-gray-90">{nickname}</span>
            <button onClick={handleEditting}>
              <img src="/icon/edit.svg" alt="edit" />
            </button>
          </div>
        )}
        <p className="text-sm font-medium text-gray-40">wimpy0410@gmail.com</p>
      </div>
    </div>
  );
};
