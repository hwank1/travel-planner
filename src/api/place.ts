import axios from "axios";

export const placeApiKey = import.meta.env.VITE_GOOGLE_REST_API_KEY as string;

export async function getRestaurants(query: string, lat: number, lon: number) {
  try {
    const response = await axios.post(
      "https://places.googleapis.com/v1/places:searchText",
      {
        textQuery: query, // 검색어
        maxResultCount: 15, // Place 개수
        locationBias: {
          circle: {
            center: {
              latitude: lat,
              longitude: lon,
            },
            radius: 10000.0,
          },
        },
      },
      {
        headers: {
          "X-Goog-Api-Key": placeApiKey, // env에서 가져오기
          "X-Goog-FieldMask":
            "places.displayName,places.formattedAddress,places.rating,places.regularOpeningHours,places.photos,places.types",
          // 필요한 필드들 콤마로 나열
        },
      },
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("에러 상세:", error.response?.data);
    }
  } finally {
  }
}
