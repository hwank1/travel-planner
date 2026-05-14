type PlaceType = "restaurant" | "attraction";

export type Place = {
  id: number;
  cityId: string;
  name: string;
  rating: number;
  address: string;
  image: string;
  category: string;
  type: PlaceType;
  regularOpeningHours: boolean;
};
