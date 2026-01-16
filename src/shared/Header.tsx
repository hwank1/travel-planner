import SearchBar from "./SearchBar";

type HeaderBarProps = {
  rightPrimaryText?: string;
  rightSecondaryText?: string;
};

export default function HeaderBar({
  rightPrimaryText = "내 일정",
  rightSecondaryText = "날짜",
}: HeaderBarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <button className="h-8 w-8 rounded-xl bg-black" />
          <span className="text-sm font-bold tracking-tight">
            KR-JP 여행 플래너
          </span>
        </div>

        {/* Search */}
        <div className="flex flex-1 justify-center">
          <SearchBar />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 sm:inline-flex"
          >
            {rightSecondaryText}
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-3 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            {rightPrimaryText}
            <span className="text-white/70">›</span>
          </button>
        </div>
      </div>
    </header>
  );
}
