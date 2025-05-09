import { create } from "zustand";

interface FindState {
  currentStep: number;
  name: string;
  startPoint: string;

  setName: (name: string) => void;
  setStartPoint: (startPoint: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

const useFindStore = create<FindState>(set => ({
  currentStep: 0,
  name: "",
  startPoint: "",

  setName: name => set({ name }),
  setStartPoint: startPoint => set({ startPoint }),
  nextStep: () => set(state => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set(state => ({ currentStep: Math.max(state.currentStep - 1, 0) })),
  reset: () =>
    set({
      currentStep: 0,
      name: "",
      startPoint: "",
    }),
}));

export { useFindStore };
