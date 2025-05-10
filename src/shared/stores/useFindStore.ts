import { create } from "zustand";

interface StartPointInfo {
  name: string;
  startPoint: string;
  address: string;
  roadAddress: string;
  longitude: number;
  latitude: number;
}

export interface FormattedData {
  username: string;
  startPoint: string;
  address: string;
  roadAddress: string;
  longitude: number;
  latitude: number;
}

interface FindState {
  currentStep: number;
  name: string;
  startPointInfo: StartPointInfo | null;

  setName: (name: string) => void;
  setStartPointInfo: (info: StartPointInfo) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
  getFormattedData: () => FormattedData | null;
  resetFindStore: () => void;
}

const useFindStore = create<FindState>()((set, get) => ({
  currentStep: 0,
  name: "",
  startPointInfo: null,

  setName: name => set({ name }),
  setStartPointInfo: info => set({ startPointInfo: info }),
  nextStep: () => set(state => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set(state => ({ currentStep: Math.max(state.currentStep - 1, 0) })),
  reset: () =>
    set({
      currentStep: 0,
      name: "",
      startPointInfo: null,
    }),
  getFormattedData: () => {
    const state = get();
    if (!state.name || !state.startPointInfo) return null;

    return {
      username: state.name,
      startPoint: state.startPointInfo.startPoint,
      address: state.startPointInfo.address,
      roadAddress: state.startPointInfo.roadAddress,
      longitude: state.startPointInfo.longitude,
      latitude: state.startPointInfo.latitude,
    };
  },
  resetFindStore: () =>
    set({
      currentStep: 0,
      name: "",
      startPointInfo: {
        name: "",
        startPoint: "",
        address: "",
        roadAddress: "",
        latitude: 0,
        longitude: 0,
      },
    }),
}));

export { useFindStore };
