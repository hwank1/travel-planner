import { Place } from "@/types/Place";
import useFavoriteStore from "@/store/useFavoriteStore";

type FavoriteCardProps = Place;

function FavoriteCard(props: FavoriteCardProps) {
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
    <div className="mt-4 shrink-0 p-4 w-96 rounded-3xl shadow-lg border border-gray-200">
      <div className="relative  mb-4 rounded-3xl w-full h-64">
        <img
          src={props.image}
          alt={props.name}
          className="absolute inset-0 h-full w-full object-cover rounded-3xl"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 flex gap-2">
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
      <div className="h-12 rounded-3xl mb-4 p-4 flex flex-col gap-1 text-sm">
        <div className="text-lg font-semibold">
          {props.cityId} ☆ {props.rating}
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
