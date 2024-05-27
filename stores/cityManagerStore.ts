import { create } from "zustand";

// Menu Show / Hide
type cityManagerMenuType = {
  managerOpen: boolean;
  managerToogle: () => void;
  managerReset: () => void;
};

export const useCityManagerStore = create<cityManagerMenuType>((set) => ({
  managerOpen: false,
  managerToogle: () => set((state) => ({ managerOpen: !state.managerOpen })),
  managerReset: () => set(() => ({ managerOpen: false })),
}));

// Current Action
type options = "add" | "list";

type activeActionType = {
  action: options;
  setAction: (newAction: options) => void;
  actionReset: () => void;
};

export const useActiveActionStore = create<activeActionType>((set) => ({
  action: "add",
  setAction: (newAction: options) => set({ action: newAction }),
  actionReset: () => set({ action: "add" }),
}));
