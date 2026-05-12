import { getIconUrl } from "@/api/openWeather";
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
      <section className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-gray-100 rounded-2xl flex flex-col items-center gap-2 p-4"
            >
              <div className="h-4 w-10 rounded bg-gray-200 skeleton" />
              <div className="h-10 w-10 rounded-full bg-gray-200 skeleton" />
              <div className="h-3 w-12 rounded bg-gray-200 skeleton" />
              <div className="h-3 w-24 rounded bg-gray-200 skeleton" />
            </div>
          ))}
        </div>
      </section>
    );
  if (error)
    return (
      <div className="h-24 mt-4 rounded-2xl border border-red-100 p-6 text-center">
        <p className="text-2xl text-red-500">
          해당 지역 날씨 정보를 불러오지 못했어요.🥺
        </p>
      </div>
    );
  if (!daily.length) return null;

  return (
    <section className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-5 gap-2">
        {daily.map((d) => (
          <div key={d.date} className="rounded-xl bg-gray-100 p-2 text-center">
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
