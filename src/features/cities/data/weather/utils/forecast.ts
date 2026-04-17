import type { ForecastWeatherData } from "@/api/openWeather";

export type DailyForecast = {
  date: string; // "YYYY-MM-DD"
  tempMin: number;
  tempMax: number;
  icon: string;
  description: string;
  name?: string;
};

export function toDailyForecast(dto: ForecastWeatherData): DailyForecast[] {
  const byDate = new Map<string, ForecastWeatherData["list"]>();

  for (const item of dto.list) {
    const date = item.dt_txt.slice(0, 10); // YYYY-MM-DD
    const arr = byDate.get(date) ?? [];
    arr.push(item);
    byDate.set(date, arr);
  }

  return Array.from(byDate.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(0, 5)
    .map(([date, items]) => {
      // 12:00에 가장 가까운 데이터(대표 아이콘/설명)
      const target = items.reduce((best, cur) => {
        const bestDiff = Math.abs(hour(best.dt_txt) - 12);
        const curDiff = Math.abs(hour(cur.dt_txt) - 12);
        return curDiff < bestDiff ? cur : best;
      }, items[0]);

      const tempMin = Math.min(...items.map((x) => x.main.temp_min));
      const tempMax = Math.max(...items.map((x) => x.main.temp_max));
      const w = target.weather[0];

      return {
        date,
        tempMin: Math.round(tempMin),
        tempMax: Math.round(tempMax),
        icon: w?.icon ?? "01d",
        description: w?.description ?? "",
      };
    });
}

function hour(dtTxt: string) {
  return Number(dtTxt.slice(11, 13));
}
