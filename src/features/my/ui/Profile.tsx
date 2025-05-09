import { useState } from "react";

//@TODO 백 연동 시 이름, 프로필사진, 이메일 수정
export const Profile = () => {
  const [isEditting, setIsEditting] = useState(false);
  const [name, setName] = useState("");

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
      <img src="https://github.com/shadcn.png" alt="profileImg" className="w-16 h-16 rounded-full" />
      <div className="flex flex-col gap-1 w-full">
        {isEditting ? (
          <input
            type="text"
            className="rounded-none w-full border-b-gray-90 border-b outline-none text-lg font-semibold text-gray-90"
            value={name}
            onChange={e => setName(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <div className="flex gap-1 items-center">
            <span className="text-lg font-semibold text-gray-90">{name}</span>
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
