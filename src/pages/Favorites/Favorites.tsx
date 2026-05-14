import useFavoriteStore from "@/store/useFavoriteStore";

export default function Favorites() {
  const { favorites } = useFavoriteStore();
  return (
    <div>
      <div>찜 목록</div>
      {favorites.map((item) => (
        <div className="h-24 w-25" key={item.id}>
          <div className="flex flex-col">
            <img src={item.image} className="w-24 h-25" />
            <span>{item.address}</span>
            <span>{item.category}</span>
            <span>{item.name}</span>
            <span>{item.rating}</span>
            <span>{item.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
