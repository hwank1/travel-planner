import { useParams } from "react-router-dom";
import { CITIES } from "@/features/cities/data/cities";
import CityHero from "./components/CityHero";
import ForecastStrip from "./components/ForecastStrip";
import { useCityWeather } from "@/hooks/useCityWeather";
import PlaceSection from "./components/PlaceSection";
import NotFound from "../NotFound";
export default function CityPage() {
  const { cityId } = useParams();
  const city = CITIES.find((c) => c.id === cityId);

  const { current, daily, loading, error } = useCityWeather(
    city?.lat,
    city?.lon,
  );

  if (!city) return <NotFound />;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <CityHero city={city} weather={{ current, loading, error }} />
      <ForecastStrip daily={daily} loading={loading} error={error} />
      <PlaceSection type="restaurant" title="맛집" />
      <PlaceSection type="attraction" title="명소" />
    </main>
  );
}
