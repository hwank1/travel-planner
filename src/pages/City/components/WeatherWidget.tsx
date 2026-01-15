export default function WeatherWidget() {
  return (
    <div className="w-full md:w-{260px} rounded-2xl bg-white/85 p-4 shadow-sm ">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-black">현재 날씨</div>
          <div className="mt-1 text-3xl font-semibold leading-none">-°</div>
          <div className="mt-2 text-xl text-gray-600">설명</div>
        </div>

        <div className="min-h-[104px] w-12 rounded-xl bg-gray-100" />
      </div>

      {/* 예보 자리(선택) */}
      <div className="mt-3 grid grid-cols-5 gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-lg bg-gray-50 p-1 text-center">
            <div className="h-6 w-6 mx-auto rounded bg-gray-100" />
            <div className="mt-1 h-3 rounded bg-gray-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
