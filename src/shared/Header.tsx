import { useState } from "react";
import { Link } from "react-router-dom";
import ExchangRate from "./ExchageRate";
import { useAuthStore } from "@/store/useAuthStore";

export default function HeaderBar() {
  const { currentUser, toggleModal, logout } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <button className="h-8 w-8 hover:opacity-50 rounded-xl bg-black text-white">
              홈
            </button>
          </Link>
          <span className="text-sm font-bold tracking-tight">
            KR-JP 여행 플래너
          </span>
        </div>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center gap-2">
          <ExchangRate />
          <Link to={"/favorites"}>
            <button className="p-2 text-sm h-9 w-16 text-white rounded-xl hover:opacity-50 bg-black">
              좋아요
            </button>
          </Link>
          {currentUser ? (
            <div className="flex gap-2">
              <span className="p-2 text-sm h-9 w-20 text-center text-white rounded-xl bg-black">
                {currentUser.nickName}님
              </span>
              <button
                className="p-2 text-sm h-9 w-20 text-center text-white rounded-xl hover:opacity-50 bg-black"
                onClick={logout}
              >
                로그아웃
              </button>
            </div>
          ) : (
            <button
              onClick={toggleModal}
              className="p-2 text-sm h-9 w-16 text-center text-white rounded-xl hover:opacity-50 bg-black"
            >
              로그인
            </button>
          )}
        </div>

        {/* 햄버거 버튼 */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 px-4 py-3 bg-white border-t border-gray-100">
          <ExchangRate />
          <Link to={"/favorites"} onClick={() => setMenuOpen(false)}>
            <button className="w-full p-2 text-sm text-white rounded-xl bg-black">
              좋아요
            </button>
          </Link>
          {currentUser ? (
            <>
              <span className="p-2 text-sm text-center text-white rounded-xl bg-black">
                {currentUser.nickName}님
              </span>
              <button
                className="p-2 text-sm text-white rounded-xl hover:opacity-50 bg-black"
                onClick={logout}
              >
                로그아웃
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                toggleModal();
                setMenuOpen(false);
              }}
              className="p-2 text-sm text-white rounded-xl hover:opacity-50 bg-black"
            >
              로그인
            </button>
          )}
        </div>
      )}
    </header>
  );
}
