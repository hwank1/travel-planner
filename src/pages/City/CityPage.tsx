// pages/City/CityPage.tsx
import { useParams } from "react-router-dom";
import { CITIES } from "@/features/cities/data/cities";
import CityHero from "./components/CityHero";
import WeatherWidget from "./components/WeatherWidget";

export default function CityPage() {
  const { cityId } = useParams();
  const city = CITIES.find((c) => c.id === cityId);

  if (!city) return <div className="p-6">도시 없음: {cityId}</div>;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <CityHero city={city} />
      <WeatherWidget />
      {/* 다음 단계 */}
      {/* <CityTabs ... /> */}
      {/* <PlaceSection ... /> */}
      {/* <PlanPanel ... /> */}
    </main>
  );
}
