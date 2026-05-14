import { create } from "zustand";
import { Place } from "@/types/Place";
import { persist } from "zustand/middleware";

interface FavoriteState {
  favorites: Place[];
  addFavorite: (item: Place) => void;
  removeFavorite: (cityId: string, type: Place["type"], id: number) => void;
  isFavorite: (cityId: string, type: Place["type"], id: number) => boolean;
}
// 초기 상태 정의
const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [] as Place[],
      addFavorite: (item) =>
        set((state) => ({
          favorites: [...state.favorites, item],
        })),
      removeFavorite: (cityId, type, id) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (item) =>
              item.cityId !== cityId || item.type !== type || item.id !== id,
          ),
        })),
      isFavorite: (cityId, type, id) => {
        return get().favorites.some(
          (item) =>
            item.cityId === cityId && item.type === type && item.id === id,
        );
      },
    }),
    { name: "favorites" },
  ),
);

export default useFavoriteStore;
