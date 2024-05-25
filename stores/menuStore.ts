import { create } from "zustand";

export const useMobileMenuStore = create<{
  mobileMenuOpen: boolean;
  mobileMenuToggle: () => void;
  mobileMenuHide: () => void;
}>((set) => ({
  mobileMenuOpen: false,
  mobileMenuToggle: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  mobileMenuHide: () => set(() => ({ mobileMenuOpen: false })),
}));
