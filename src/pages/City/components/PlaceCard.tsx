import { Place } from "@/types/Place";
import useFavoriteStore from "@/store/useFavoriteStore";
type PlaceCardProps = Place;
export default function PlaceCard(props: PlaceCardProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();
  const liked = isFavorite(props.cityId, props.type, props.id);
  const toggleFavorite = () => {
    if (liked) {
      removeFavorite(props.cityId, props.type, props.id);
    } else {
      addFavorite(props);
    }
  };
  return (
    <div className="mt-4 p-4 w-96 h-[430px] rounded-3xl shadow-lg border border-gray-100">
      <div className="relative  mb-4  rounded-3xl w-full h-2/3">
        <img
          src={props.image}
          alt={props.name}
          className="absolute inset-0 h-full w-full object-cover rounded-3xl"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="rounded-2xl flex items-center justify-center h-8 w-16 bg-white/90 text-gray-800">
            인기
          </span>
          <button
            className="bg-white/90 h-8 w-8 rounded-3xl"
            onClick={toggleFavorite}
          >
            {liked ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <p className="mb-1 font-bold text-white"></p>
          <p className="text-white">{props.name}</p>
        </div>
      </div>
      <div className="h-1/3 rounded-3xl mb-4 p-4  flex flex-col gap-1 text-sm">
        <div>{props.type}</div>
        <div>평점: {props.rating}</div>
        <div>
          현재 영업 여부:{" "}
          {props.regularOpeningHours ? "영업 중" : "영업 중 아님"}
        </div>
      </div>
    </div>
  );
}
