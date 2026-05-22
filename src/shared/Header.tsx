import { Link } from "react-router-dom";

import ExchangRate from "./ExchageRate";
import { useAuthStore } from "@/store/useAuthStore";

export default function HeaderBar({}) {
  const { currentUser, toggleModal, logout } = useAuthStore();
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
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

        {/* Search */}
        <div className="flex flex-1 justify-center"></div>
        <ExchangRate />
        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link to={"/favorites"}>
            <button className="flex-row items-center p-2 text-sm h-9 w-16 text-white rounded-xl hover:opacity-50 bg-black">
              좋아요
            </button>
          </Link>
          {currentUser ? (
            <div className="flex gap-2">
              <span
                className="flex-row
              items-center
              p-2
              text-sm
              h-9
              w-20
              text-center
              text-white
              rounded-xl
              hover:opacity-50
              bg-black"
              >
                {currentUser.nickName}님
              </span>
              <button
                className="flex-row
              items-center
              p-2
              text-sm
              h-9
              w-20
              text-center
              text-white
              rounded-xl
              hover:opacity-50
              bg-black"
                onClick={logout}
              >
                로그아웃
              </button>
            </div>
          ) : (
            <button
              onClick={toggleModal}
              className="flex-row text-center items-center p-2 text-sm h-9 w-16 text-white rounded-xl hover:opacity-50 bg-black"
            >
              로그인
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
