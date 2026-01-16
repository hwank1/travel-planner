import type { City } from "@/types/City";
import WeatherWidget from "./WeatherWidget";
import type { CurrentWeatherData } from "@/features/cities/data/weather/api/openWeather";

type CityHeroProps = {
  city: City;
  weather: {
    current: CurrentWeatherData | null;
    loading: boolean;
    error: string | null;
  };
};

export default function CityHero({ city, weather }: CityHeroProps) {
  const { current, loading, error } = weather;

  return (
    <section className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
      <div className="relative aspect-[16/6] w-full bg-gray-100">
        <img
          src={city.imageUrl}
          alt={city.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-white">
              <div className="text-3xl font-bold tracking-tight">
                {city.title}
              </div>
              <div className="mt-1 text-sm text-white/90">{city.subtitle}</div>
              <div className="mt-3 text-xs text-white/85">{city.hashtags}</div>
            </div>

            <WeatherWidget
              city={city}
              data={current}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
