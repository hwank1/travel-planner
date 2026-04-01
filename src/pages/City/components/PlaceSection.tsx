import { tokyoPlace } from "@/data/tokyoPlace";
import { useState } from "react";
import PlaceCard from "./PlaceCard";
type PlaceSectionProps = {
  // 맛집, 명소만 (시간 있을 때 카페 , 쇼핑 추가)
  type: "restaurant" | "attraction";
  title: string;
};
// Place 카드 필터 슬라이드 기능
export default function PlaceSection({ type, title }: PlaceSectionProps) {
  const places = tokyoPlace.filter((place) => place.type === type);
  const [currentIndex, setCurrentIndex] = useState(0);

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
