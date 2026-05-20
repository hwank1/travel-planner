import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LoginModal {
  isModalOpen: boolean;
  toggleModal: () => void;
}
export const useModalStore = create<LoginModal>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));

interface AuthStore {
  isModalOpen: boolean;
  user: { nickName: string; email: string } | null;
  toggleModal: () => void;
  signup: (nickName: string, email: string, password: string) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isModalOpen: false,
      user: null,
      toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
      signup: (nickName, email, password) =>
        set({
          user: { nickName, email },
        }),
    }),
    { name: "auth" },
  ),
);
