import CityCard from "./components/CityCard";
import { CITIES } from "@/features/cities/data/cities";
export default function HomeCitySections() {
  const kr = CITIES.filter((c) => c.country === "KR");
  const jp = CITIES.filter((c) => c.country === "JP");
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* 한국 도시카드 */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">한국</h2>

        <p className="mt-4 text-sm text-gray-600">
          가까운 국내 도시로 가볍게 떠나기
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kr.map((city) => (
            <CityCard key={city.id} {...city} />
          ))}
        </div>
      </section>

      {/* 중간 선 */}
      <div className="my-14 h-px w-full bg-gray-100" />

      {/* 일본 도시카드 */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">일본</h2>

        <p className="mt-4 text-sm text-gray-600">
          인기 도시부터 차근차근 골라보기
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {jp.map((city) => (
            <CityCard key={city.id} {...city} />
          ))}
        </div>
      </section>
    </main>
  );
}
