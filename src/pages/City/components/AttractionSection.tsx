import { tokyoPlace } from "@/data/tokyoPlace";

export default function AttractionSection() {
  const attraction = tokyoPlace.filter((place) => place.type === "attraction");
  return (
    <div>
      {attraction.map((p) => (
        <div
          key={p.id}
          className="mt-4 p-4 w-96 h-[430px] rounded-3xl shadow-lg  border-gray-100"
        >
          <div className="relative  mb-4  rounded-3xl w-full h-2/3">
            <img
              src={p.image}
              alt={p.name}
              className="absolute inset-0 h-full w-full object-cover rounded-3xl"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <span className="rounded-2xl flex items-center justify-center h-8 w-16 bg-white/90 text-gray-800">
                인기
              </span>
              <button className="rounded-3xl h-8 w-8 bg-white/90">♡</button>
            </div>
            <div className="absolute bottom-4 left-4">
              <p className="mb-1 font-bold text-white">{p.address}</p>
              <p className="text-white">{p.name}</p>
            </div>
          </div>
          <div className="h-1/3 rounded-3xl mb-4 p-4  flex flex-col gap-1 text-sm">
            <div>{p.type}</div>
            <div>{p.rating}</div>
            <div>영업시간: 10:00 ~ 20:00</div>
          </div>
        </div>
      ))}
    </div>
  );
}
