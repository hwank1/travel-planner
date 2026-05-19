import useFavoriteStore from "@/store/useFavoriteStore";
import FavoriteCitySection from "./components/FavoriteCitySection";

export default function Favorites() {
  const { favorites } = useFavoriteStore();

  const grouped = Object.groupBy(favorites, (item) => item.cityId);
  if (favorites.length === 0) {
    return (
      <div className="flex m-5 flex-col items-center justify-center p-12 gap-3 border border-gray-200 rounded-2xl bg-gray-50">
        <span className="text-4xl text-gray-300">♡</span>
        <p className="font-medium text-gray-800">찜한 장소가 없어요</p>
        <p className="text-sm text-gray-400">
          도시 페이지에서 마음에 드는 곳을 찜해보세요
        </p>
      </div>
    );
  }
  return (
    <div className="flex-col p-5">
      <span className="text-2xl font-semibold">찜한 장소 </span>
      <span className="px-2 py-1 rounded-2xl bg-slate-300 text-sm">
        {favorites.length}곳
      </span>
      {Object.entries(grouped).map(([cityId, places]) => (
        <FavoriteCitySection key={cityId} cityId={cityId} places={places} />
      ))}
    </div>
  );
}
