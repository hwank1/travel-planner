import { create } from "zustand";

interface LoginModal {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const useAuthStore = create<LoginModal>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));
