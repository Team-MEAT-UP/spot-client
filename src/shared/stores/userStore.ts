import { create } from "zustand";

interface UserState {
  nickname: string;
  profileImageUrl: string;
  setNickname: (nickname: string) => void;
  setProfileImgUrl: (url: string) => void;
}

export const useUserStore = create<UserState>(set => ({
  nickname: "",
  profileImageUrl: "",
  setNickname: nickname => set({ nickname }),
  setProfileImgUrl: url => set({ profileImageUrl: url }),
}));
