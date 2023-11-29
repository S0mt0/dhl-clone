import { create } from "zustand";

type MobileMenuStore = {
  isMobileMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

export const useMobileMenu = create<MobileMenuStore>((set) => ({
  isMobileMenuOpen: false,
  openMenu: () => set({ isMobileMenuOpen: true }),
  closeMenu: () => set({ isMobileMenuOpen: false }),
}));
