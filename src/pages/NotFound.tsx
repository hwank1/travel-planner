export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">페이지를 찾을 수 없어요</h1>
      <p className="text-gray-500">지원하지 않는 도시예요</p>
      <button
        onClick={() => window.history.back()}
        className="mt-4 px-6 py-2 bg-black text-white rounded-full"
      >
        돌아가기
      </button>
    </div>
  );
}
