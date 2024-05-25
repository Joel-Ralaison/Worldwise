import { create } from "zustand";

type Search = {
  currentSearch: string;
  showSearch: boolean;
  setCurrentSearch: (newSearch: string) => void;
  setShowSearch: (value: boolean) => void;
};

export const useSearchStrore = create<Search>((set) => ({
  currentSearch: "",
  showSearch: false,
  setCurrentSearch: (newSearch: string) => set({ currentSearch: newSearch }),
  setShowSearch: (value: boolean) => set({ showSearch: value }),
}));
