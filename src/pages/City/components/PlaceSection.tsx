import { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import { useParams } from "react-router-dom";
import { CITIES } from "@/features/cities/data/cities";
import { getRestaurants, placeApiKey } from "@/api/place";
import { GooglePlace } from "@/types/GooglePlace";
import { Place } from "@/types/Place";

type PlaceSectionProps = {
  // 맛집, 명소만 (시간 있을 때 카페 , 쇼핑 추가)
  type: "restaurant" | "attraction";
  title: string;
};
// Place 카드 필터 슬라이드 기능
export default function PlaceSection({ type, title }: PlaceSectionProps) {
  const { cityId } = useParams();
  const currentCity = CITIES.find((c) => c.id === cityId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [places, setPlaces] = useState<Place[]>([]);
  useEffect(() => {
    const fetchPlaces = async () => {
      const query = `${currentCity?.title} ${type === "restaurant" ? "맛집" : "명소"}`;
      if (!currentCity) return;
      const data = await getRestaurants(
        query,
        currentCity.lat,
        currentCity.lon,
      );
      const mapped = data.places.map((p: GooglePlace, index: number) => ({
        id: index,
        name: p.displayName.text,
        address: p.formattedAddress,
        rating: p.rating,
        image: `https://places.googleapis.com/v1/${p.photos[0].name}/media?maxWidthPx=400&key=${placeApiKey}`,
        type: type,
        regularOpeningHours: p.regularOpeningHours,
      }));
      setPlaces(mapped);
    };

    fetchPlaces();
  }, [currentCity]);
  const leftBtnClickHandler = () => {
    setCurrentIndex(currentIndex - 1);
  };
  const rightBtnClickHandler = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const visiblePlaces = places.slice(currentIndex, currentIndex + 3);
  return (
    <div className="relative px-6 overflow-visible">
      <p className="mt-4 font-bold text-2xl">{title}</p>
      <div className="flex gap-4">
        {visiblePlaces.map((p) => (
          <PlaceCard key={p.id} {...p} />
        ))}
      </div>
      <button
        onClick={leftBtnClickHandler}
        disabled={currentIndex === 0}
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10"
      >
        ←
      </button>
      <button
        onClick={rightBtnClickHandler}
        disabled={currentIndex + 3 >= places.length}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10"
      >
        →
      </button>
    </div>
  );
}
