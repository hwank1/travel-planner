import { useEffect, useState } from "react";
import {
  fetchForecast,
  fetchWeather,
  type CurrentWeatherData,
} from "@/api/openWeather";
import {
  toDailyForecast,
  type DailyForecast,
} from "@/features/cities/data/weather/utils/forecast";

export function useCityWeather(lat?: number, lon?: number) {
  const [current, setCurrent] = useState<CurrentWeatherData | null>(null);
  const [daily, setDaily] = useState<DailyForecast[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (lat == null || lon == null) {
      setCurrent(null);
      setDaily([]);
      setError("해당 지역은 데이터가 없어요.");
      return;
    }

    let alive = true;
    setLoading(true);
    setError(null);

    Promise.all([fetchWeather(lat, lon), fetchForecast(lat, lon)])
      .then(([w, f]) => {
        if (!alive) return;
        setCurrent(w);
        setDaily(toDailyForecast(f));
      })
      .catch((e) => {
        if (!alive) return;
        setError(e?.message ?? "weather error");
      })
      .finally(() => {
        if (!alive) return;
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [lat, lon]);

  return { current, daily, loading, error };
}
