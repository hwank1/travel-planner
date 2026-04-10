import { getIconUrl, type CurrentWeatherData } from "@/api/openWeather";
import type { City } from "@/types/City";
// CityHero 안에 있는 해당 지역 날씨 UI
export default function WeatherWidget({
  city,
  data,
  loading,
  error,
}: {
  city: City;
  data: CurrentWeatherData | null;
  loading: boolean;
  error: string | null;
}) {
  return (
    <div className="w-full md:w-[350px] rounded-2xl bg-white/85 p-4 shadow-sm backdrop-blur">
      {loading && (
        <div className="text-sm text-gray-600">날씨 불러오는 중…</div>
      )}
      {error && <div className="text-sm text-red-600">오류: {error}</div>}

      {data && (
        <div className="flex items-center gap-1 justify-between">
          <div>
            <div className="text-xl font-semibold text-black">
              {city.title}의 현재 날씨
            </div>
            <div className="mt-2 text-2xl font-semibold leading-none">
              {Math.round(data.main.temp)}°
            </div>
            <div className="mt-2 text-base text-gray-600">
              {data.weather[0]?.description}
            </div>
          </div>

          {data.weather[0]?.icon && (
            <img alt="icon" src={getIconUrl(data.weather[0].icon)} />
          )}
        </div>
      )}
    </div>
  );
}
