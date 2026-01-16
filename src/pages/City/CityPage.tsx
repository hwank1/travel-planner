import { useParams } from "react-router-dom";
import { CITIES } from "@/features/cities/data/cities";
import CityHero from "./components/CityHero";
import ForecastStrip from "./components/ForecastStrip";
import { useCityWeather } from "@/hooks/useCityWeather";

export default function CityPage() {
  const { cityId } = useParams();
  const city = CITIES.find((c) => c.id === cityId);

  // ✅ 훅은 항상 호출 (city 없으면 undefined 넘김)
  const { current, daily, loading, error } = useCityWeather(
    city?.lat,
    city?.lon,
  );

  if (!city) return <div className="p-6">도시 없음: {cityId}</div>;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <CityHero city={city} weather={{ current, loading, error }} />
      <ForecastStrip daily={daily} loading={loading} error={error} />
    </main>
  );
}
