// src/pages/City/CityPage.tsx
import { useParams } from "react-router-dom";
import { City } from "@/features/cities/data/cities";
type CityHeroProps = {
  city: City;
  // right는 일단 미룸
};
export default function CityPage({ city }: CityHeroProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        <div className="relative aspect-[16/7] w-full bg-gray-100">
          <img
            src={city.imageUrl}
            alt={city.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="text-white">
                <div className="text-3xl font-bold tracking-tight">
                  {city.title}
                </div>
                <div className="mt-1 text-sm text-white/90">
                  {city.subtitle}
                </div>
                <div className="mt-3 text-xs text-white/85">
                  {city.hashtags}
                </div>
              </div>

              {/* 날씨 */}
              <div className="w-full md:w-[260px] bg-white"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
