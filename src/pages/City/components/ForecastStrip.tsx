import { getIconUrl } from "@/features/cities/data/weather/api/openWeather";
import type { DailyForecast } from "@/features/cities/data/weather/utils/forecast";

export default function ForecastStrip({
  daily,
  loading,
  error,
}: {
  daily: DailyForecast[];
  loading: boolean;
  error: string | null;
}) {
  if (loading)
    return (
      <div className="mt-4 rounded-2xl border bg-white p-4">
        예보 불러오는 중…
      </div>
    );
  if (error)
    return (
      <div className="mt-4 rounded-2xl border bg-white p-4 text-red-600">
        예보 오류: {error}
      </div>
    );
  if (!daily.length) return null;

  return (
    <section className="mt-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-5 gap-2">
        {daily.map((d) => (
          <div key={d.date} className="rounded-xl bg-gray-50 p-2 text-center">
            <div className="text-sm text-gray-500">{mmdd(d.date)}</div>
            <img
              alt={d.icon}
              className="mx-auto h-14 w-14"
              src={getIconUrl(d.icon)}
            />
            <span className="text-sm">{d.description}</span>
            <div className="text-sm">
              <span className="font-medium">최고 {d.tempMax}°</span>
              <span className="text-gray-400">/최저 {d.tempMin}°</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function mmdd(date: string) {
  return `${date.slice(5, 7)}/${date.slice(8, 10)}`;
}
