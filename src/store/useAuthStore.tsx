import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  mode: "login" | "signup";
  setMode: (mode: "login" | "signup") => void;
  isModalOpen: boolean;
  user: { nickName: string; email: string; password: string } | null;
  currentUser: { nickName: string; email: string } | null;
  toggleModal: () => void;
  signup: (nickName: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      mode: "login",
      setMode: (mode) => set({ mode }),
      isModalOpen: false,
      user: null,
      currentUser: null,
      toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
      signup: (nickName, email, password) =>
        set({
          user: { nickName, email, password },
        }),
      login: (email, password) =>
        set((state) => {
          if (state.user?.email === email && state.user.password === password) {
            return { currentUser: state.user, isModalOpen: false };
          }
          return {};
        }),
      logout: () => set({ currentUser: null, mode: "login" }),
    }),
    { name: "auth" },
  ),
);
