import { useParams } from "react-router-dom";
import { CITIES } from "@/features/cities/data/cities";
import CityHero from "./components/CityHero";
import ForecastStrip from "./components/ForecastStrip";
import { useCityWeather } from "@/hooks/useCityWeather";
import PlaceCard from "./components/PlaceCard";
import { tokyoPlace } from "@/data/tokyoPlace";
export default function CityPage() {
  const restaurant = tokyoPlace.filter((p) => p.type === "restaurant");
  const attraction = tokyoPlace.filter((p) => p.type === "attraction");
  const { cityId } = useParams();
  const city = CITIES.find((c) => c.id === cityId);

  const { current, daily, loading, error } = useCityWeather(
    city?.lat,
    city?.lon,
  );

  if (!city) return <div className="p-6">도시 없음: {cityId}</div>;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <CityHero city={city} weather={{ current, loading, error }} />
      <ForecastStrip daily={daily} loading={loading} error={error} />
      <div className="">
        {restaurant.map((place) => (
          <PlaceCard key={place.id} {...place} />
        ))}
      </div>
      <div>
        {attraction.map((place) => (
          <PlaceCard key={place.id} {...place} />
        ))}
      </div>
    </main>
  );
}
