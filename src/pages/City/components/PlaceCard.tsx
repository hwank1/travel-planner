import { Place } from "@/types/Place";
type PlaceCardProps = Place;
export default function PlaceCard(props: PlaceCardProps) {
  return (
    <div className="mt-4 p-4 w-96 h-[430px] rounded-3xl shadow-lg  border-gray-100">
      <div className="relative  mb-4  rounded-3xl w-full h-2/3">
        <img
          src={props.image}
          alt={props.name}
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
          <p className="mb-1 font-bold text-white">{props.address}</p>
          <p className="text-white">{props.name}</p>
        </div>
      </div>
      <div className="h-1/3 rounded-3xl mb-4 p-4  flex flex-col gap-1 text-sm">
        <div>{props.type}</div>
        <div>{props.rating}</div>
        <div>영업시간: 10:00 ~ 20:00</div>
      </div>
    </div>
  );
}
