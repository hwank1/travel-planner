import CityCard from "./components/CityCard";
import tokyo from "@/assets/tokyo.jpg";
import seoul from "@/assets/seoul.jpg";
import busan from "@/assets/busan.jpg";
import jeju from "@/assets/jeju.jpg";
import osaka from "@/assets/osaka.jpg";
import sapporo from "@/assets/sapporo.jpg";
export default function HomeCitySections() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Korea */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">한국</h2>

        <p className="mt-4 text-sm text-gray-600">
          가까운 국내 도시로 가볍게 떠나기
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <CityCard
            title="Seoul"
            subtitle="Korea · 인기"
            hashtags="#맛집 #핫플 #야경"
            imageUrl={seoul}
            badgeLeft="Korea"
            badgeRight="인기"
          />
          <CityCard
            title="Busan"
            subtitle="Korea · 인기"
            hashtags="#바다 #해운대 #야경"
            imageUrl={busan}
            badgeRight="인기"
          />
          <CityCard
            title="Jeju"
            subtitle="Korea · 인기"
            hashtags="#자연 #힐링 #드라이브"
            imageUrl={jeju}
            badgeLeft="Korea"
            badgeRight="인기"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="my-14 h-px w-full bg-gray-100" />

      {/* Japan */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">일본</h2>

        <p className="mt-4 text-sm text-gray-600">
          인기 도시부터 차근차근 골라보기
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <CityCard
            title="Tokyo"
            subtitle="Japan · 인기"
            hashtags="#쇼핑 #도심 #야경"
            imageUrl={tokyo}
            badgeLeft="Japan"
            badgeRight="인기"
          />
          <CityCard
            title="Osaka"
            subtitle="Japan · 인기"
            hashtags="#먹방 #야경 #가성비"
            imageUrl={osaka}
            badgeLeft="Japan"
            badgeRight="인기"
          />
          <CityCard
            title="Sapporo"
            subtitle="Japan · 인기"
            hashtags="#스스키노 #설국 #비에이"
            imageUrl={sapporo}
            badgeLeft="Japan"
            badgeRight="인기"
          />
        </div>
      </section>
    </main>
  );
}
