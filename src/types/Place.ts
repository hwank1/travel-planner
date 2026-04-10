type PlaceType = "restaurant" | "attraction";

export type Place = {
  id: number;
  name: string;
  rating: number;
  address: string;
  image: string;
  category: string;
  type: PlaceType;
  regularOpeningHours: boolean;
};
