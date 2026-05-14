import seoul from "@/assets/seoul.jpg";
import busan from "@/assets/busan.jpg";
import jeju from "@/assets/jeju.jpg";
import tokyo from "@/assets/tokyo.jpg";
import osaka from "@/assets/osaka.jpg";
import sapporo from "@/assets/sapporo.jpg";
import { City } from "@/types/City";

export const CITIES: City[] = [
  {
    id: 1,
    cityId: "Seoul",
    country: "KR",
    title: "Seoul",
    subtitle: "Korea · 인기",
    hashtags: "#맛집 #핫플 #야경",
    imageUrl: seoul,
    badgeLeft: "Korea",
    badgeRight: "인기",
    lat: 37.5665,
    lon: 126.978,
  },
  {
    id: 2,
    cityId: "Busan",
    country: "KR",
    title: "Busan",
    subtitle: "Korea · 인기",
    hashtags: "#바다 #해운대 #야경",
    imageUrl: busan,
    badgeLeft: "Korea",
    badgeRight: "인기",
    lat: 35.1796,
    lon: 129.0756,
  },
  {
    id: 3,
    cityId: "Jeju",
    country: "KR",
    title: "Jeju",
    subtitle: "Korea · 인기",
    hashtags: "#자연 #힐링 #드라이브",
    imageUrl: jeju,
    badgeLeft: "Korea",
    badgeRight: "인기",
    lat: 33.4996,
    lon: 126.5312,
  },

  {
    id: 4,
    cityId: "Tokyo",
    country: "JP",
    title: "Tokyo",
    subtitle: "Japan · 인기",
    hashtags: "#쇼핑 #도심 #야경",
    imageUrl: tokyo,
    badgeLeft: "Japan",
    badgeRight: "인기",
    lat: 35.6762,
    lon: 139.6503,
  },
  {
    id: 5,
    cityId: "Osaka",
    country: "JP",
    title: "Osaka",
    subtitle: "Japan · 인기",
    hashtags: "#먹방 #야경 #가성비",
    imageUrl: osaka,
    badgeLeft: "Japan",
    badgeRight: "인기",
    lat: 34.6937,
    lon: 135.5023,
  },
  {
    id: 6,
    cityId: "Sapporo",
    country: "JP",
    title: "Sapporo",
    subtitle: "Japan · 인기",
    hashtags: "#스스키노 #설국 #비에이",
    imageUrl: sapporo,
    badgeLeft: "Japan",
    badgeRight: "인기",
    lat: 43.0618,
    lon: 141.3545,
  },
];
