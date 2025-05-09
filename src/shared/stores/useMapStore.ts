import { create } from "zustand";
import { mockMapData } from "@/shared/model";
import { MapState } from "../model/MapData.type";

export const useMapStore = create<MapState>(set => ({
  users: mockMapData.users,
  meetingPoint: mockMapData.meetingPoint,

  setUsers: users => set({ users }),
  setMeetingPoint: meetingPoint => set({ meetingPoint }),
}));
