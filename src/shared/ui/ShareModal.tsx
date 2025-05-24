import { Modal } from "@/shared/ui";
import { ReactNode, useState } from "react";
import { shareContentProps } from "../model";
import { shareToKakao } from "../utils";
import LinkCopy from "@/assets/icon/linkCopy.svg";
import KakaoShare from "@/assets/icon/kakaoShare.svg";
import CloseGray from "@/assets/icon/closeGray.svg";
import Toast from "./Toast";

interface ShareModalProps {
  onClose: () => void;
  title: ReactNode;
  description?: string;
  shareContent: shareContentProps;
}

const shareItems = [
  {
    src: LinkCopy,
    alt: "linkCopy",
    label: "링크 복사",
  },
  {
    src: KakaoShare,
    alt: "kakaoShare",
    label: "카카오톡",
  },
];

export const ShareModal = ({ onClose, title, description, shareContent }: ShareModalProps) => {
  const [toastKey, setToastKey] = useState<number | null>(null);

  const handleKakaoShare = () => {
    shareToKakao(shareContent);
    onClose();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setToastKey(Date.now()); // 새로운 키로 Toast 재생성
  };

  return (
    <Modal onClose={onClose}>
      <div className="relative p-5 pb-[20px] flex flex-col gap-6">
        <button onClick={onClose} className="absolute top-5 right-5 w-6 h-6">
          <img src={CloseGray} alt="close" className="w-6 h-6" />
        </button>
        <div className={`text-md font-semibold text-gray-90 ${description && "flex flex-col items-center"}`}>
          <span>{title}</span>
          {description && <span>{description}</span>}
        </div>
        <div className="flex gap-6 justify-center">
          {shareItems.map(({ src, alt, label }) => (
            <button
              key={label}
              onClick={() => {
                if (label === "카카오톡") {
                  handleKakaoShare();
                } else if (label === "링크 복사") {
                  handleCopyLink();
                }
              }}
              className="flex flex-col gap-2 items-center">
              <img src={src} alt={alt} className="w-12 h-12" />
              <p className="text-xs font-medium text-gray-80">{label}</p>
            </button>
          ))}
        </div>
        {toastKey && <Toast key={toastKey} message="복사가 완료되었어요" />}
      </div>
    </Modal>
  );
};
