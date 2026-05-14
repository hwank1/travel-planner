import { useEffect, useState } from "react";

export default function ExchangRate() {
  const [jpyRate, setJpyRate] = useState(0);
  useEffect(() => {
    fetch("/api/exchange/latest?from=JPY&to=KRW")
      .then((res) => res.json())
      .then((data) => {
        const jpyAmount = data.rates.KRW;
        setJpyRate(jpyAmount * 100);
      });
  }, []);

  return (
    <div className="flex items-center gap-[10px] rounded-xl border border-gray-200 bg-white px-[14px] py-2">
      <div className="flex items-center gap-[5px]">
        <span className="text-[13px] text-gray-900">환율</span>
        <span className="text-[13px] text-gray-900">1,000JPY</span>
        <span className="text-[13px] text-gray-500">→</span>
        <span className="text-[14px] font-medium text-gray-900">
          {jpyRate.toFixed(1)}KRW
        </span>
      </div>
      <div className="h-[14px] w-px bg-gray-100" />
      <span className="text-[11px] text-gray-600">실시간</span>
    </div>
  );
}
