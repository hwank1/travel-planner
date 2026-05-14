// import { useEffect, useState } from "react";
// import { Place } from "@/types/Place";
// import type { City } from "@/types/City";
// import { useParams } from "react-router-dom";
// import { CITIES } from "@/features/cities/data/cities";
// import { getRestaurants, placeApiKey } from "@/api/place";
// import { GooglePlace } from "@/types/GooglePlace";

// export function usePlaces(type: "restaurant" | "attraction", city?: City) {
//   const { cityId } = useParams();
//   const currentCity = CITIES.find((c) => c.cityId === cityId);
//   const [places, setPlaces] = useState<Place[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // fetchPlaces 로직 여기로 이동
//     const fetchPlaces = async () => {
//       console.log("fetchPlaces 실행됨", cityId);
//       const query = `${currentCity?.title} ${type === "restaurant" ? "맛집" : "명소"}`;
//       if (!currentCity) return;
//       const data = await getRestaurants(
//         query,
//         currentCity.lat,
//         currentCity.lon,
//       );
//       const mapped = data.places.map((p: GooglePlace, index: number) => ({
//         id: index,
//         cityId: cityId,
//         name: p.displayName.text,
//         address: p.formattedAddress,
//         rating: p.rating,
//         image: `https://places.googleapis.com/v1/${p.photos[1].name}/media?maxWidthPx=400&key=${placeApiKey}`,
//         type: type,
//         regularOpeningHours: p.regularOpeningHours,
//       }));
//       console.log(mapped);
//       setPlaces(mapped);
//     };

//     fetchPlaces();
//     setLoading(true);
//   }, [city]);

//   return { places, loading, error };
// }
