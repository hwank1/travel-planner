import axios from "axios";

const weatherApiKey = import.meta.env.VITE_OPENWEATHER_API_KEY as string;
const weatherBaseUrl = import.meta.env.VITE_OPENWEATHER_BASE_URL as string;

const openWeatherMap = axios.create({
  baseURL: weatherBaseUrl,
  params: {
    appid: weatherApiKey,
    units: "metric",
    lang: "kr",
  },
});

// 당일 하루 일기 예보 api 호출 값
export type CurrentWeatherData = {
  weather: { description: string; icon: string }[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: { speed: number };
};
export async function fetchWeather(lat: number, lon: number) {
  const { data } = await openWeatherMap.get<CurrentWeatherData>("/weather", {
    params: { lat, lon },
  });
  return data;
}

// 5일간 일기 예보 api 호출 값
export type ForecastWeatherData = {
  list: {
    dt: number;
    dt_txt: string; // "YYYY-MM-DD HH:mm:ss"
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: { description: string; icon: string }[];
  }[];
  city: {
    name: string;
  };
};

export async function fetchForecast(lat: number, lon: number) {
  const { data } = await openWeatherMap.get<ForecastWeatherData>("/forecast", {
    params: { lat, lon },
  });
  return data;
}

export function getIconUrl(icon: string) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
