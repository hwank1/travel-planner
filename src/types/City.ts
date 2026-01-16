export type Country = "KR" | "JP";

export type City = {
  id: string;
  country: Country;
  title: string;
  subtitle: string;
  hashtags: string;
  imageUrl: string;
  badgeLeft?: string;
  badgeRight?: string;
  lat: number;
  lon: number;
};
