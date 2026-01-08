type SearchBarProps = {
  placeholder?: string;
};

export default function SearchBar({
  placeholder = "도시 검색 (서울, 오사카...)",
}: SearchBarProps) {
  return (
    <div className="w-full max-w-[560px]">
      <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-gray-300">
        {/* Icon (pure UI) */}
        <span className="select-none text-gray-400">⌕</span>

        <input
          placeholder={placeholder}
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />

        {/* Right small hint */}
        <span className="hidden select-none rounded-xl bg-gray-50 px-2 py-1 text-xs text-gray-500 sm:inline-flex">
          Enter
        </span>
      </div>
    </div>
  );
}
