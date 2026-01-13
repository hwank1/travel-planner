import seoul from "@/assets/seoul.jpg";
import busan from "@/assets/busan.jpg";
import jeju from "@/assets/jeju.jpg";
import tokyo from "@/assets/tokyo.jpg";
import osaka from "@/assets/osaka.jpg";
import sapporo from "@/assets/sapporo.jpg";

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
};

export const CITIES: City[] = [
  {
    id: "seoul",
    country: "KR",
    title: "Seoul",
    subtitle: "Korea · 인기",
    hashtags: "#맛집 #핫플 #야경",
    imageUrl: seoul,
    badgeLeft: "Korea",
    badgeRight: "인기",
  },
  {
    id: "busan",
    country: "KR",
    title: "Busan",
    subtitle: "Korea · 인기",
    hashtags: "#바다 #해운대 #야경",
    imageUrl: busan,
    badgeLeft: "Korea",
    badgeRight: "인기",
  },
  {
    id: "jeju",
    country: "KR",
    title: "Jeju",
    subtitle: "Korea · 인기",
    hashtags: "#자연 #힐링 #드라이브",
    imageUrl: jeju,
    badgeLeft: "Korea",
    badgeRight: "인기",
  },

  {
    id: "tokyo",
    country: "JP",
    title: "Tokyo",
    subtitle: "Japan · 인기",
    hashtags: "#쇼핑 #도심 #야경",
    imageUrl: tokyo,
    badgeLeft: "Japan",
    badgeRight: "인기",
  },
  {
    id: "osaka",
    country: "JP",
    title: "Osaka",
    subtitle: "Japan · 인기",
    hashtags: "#먹방 #야경 #가성비",
    imageUrl: osaka,
    badgeLeft: "Japan",
    badgeRight: "인기",
  },
  {
    id: "sapporo",
    country: "JP",
    title: "Sapporo",
    subtitle: "Japan · 인기",
    hashtags: "#스스키노 #설국 #비에이",
    imageUrl: sapporo,
    badgeLeft: "Japan",
    badgeRight: "인기",
  },
];
