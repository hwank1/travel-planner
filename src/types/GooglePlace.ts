export type GooglePlace = {
  id: number;
  displayName: { text: string };
  formattedAddress: string;
  rating: number;
  photos: { name: string }[];
  types: string[];
  regularOpeningHours: boolean;
};
