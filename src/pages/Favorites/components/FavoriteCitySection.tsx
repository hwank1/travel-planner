import { Place } from "@/types/Place";
import FavoriteCard from "./FavoriteCard";

type FavoriteCitySectionProps = {
  cityId: string;
  places: Place[] | undefined;
};

function FavoriteCitySection({ cityId, places }: FavoriteCitySectionProps) {
  const restaurants = places?.filter((item) => item.type === "restaurant");
  const attractions = places?.filter((item) => item.type === "attraction");

  return (
    <div className="">
      <div className="flex my-4 items-center gap-3">
        <span className="text-xl font-bold">{cityId}</span>
        <span className="px-2 py-1 rounded-2xl bg-slate-300 text-sm">
          {places?.length}곳
        </span>
        <div className="flex-1 border-t border-gray-300" />
      </div>
      <span className="text-lg font-semibold">
        {attractions?.length === 0 ? "" : "명소"}
      </span>

      <div className="flex gap-5 mt-5 mb-5">
        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {attractions?.map((item) => (
            <FavoriteCard
              key={`${item.cityId}-${item.type}-${item.id}`}
              {...item}
            />
          ))}
        </div>
      </div>
      <span className="text-lg font-semibold">
        {restaurants?.length === 0 ? "" : "맛집"}
      </span>

      <div className="flex gap-5 mt-5 mb-5">
        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {restaurants?.map((item) => (
            <FavoriteCard
              key={`${item.cityId}-${item.type}-${item.id}`}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavoriteCitySection;
