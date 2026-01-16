import { Link } from "react-router-dom";
import type { City } from "@/types/City";
type CityCardProps = City;

export default function CityCard(props: CityCardProps) {
  return (
    <Link to={`/city/${props.id}`} className="block">
      <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition  hover:shadow-md">
        {/* Image: 4:5 */}

        <div className="relative aspect-[4/5] w-full bg-gray-100">
          <img
            src={props.imageUrl}
            alt={props.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          {/* Top badges */}
          <div className="absolute left-3 top-3 flex gap-2">
            <span className="rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white ">
              {props.badgeLeft}
            </span>
            <span className="rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white ">
              {props.badgeRight}
            </span>
          </div>

          {/* Bottom overlay text */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Text */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-4">
            <div className="space-y-1 text-white">
              <div className="text-2xl font-semibold leading-none">
                {props.title}
              </div>
              <div className="text-sm text-white/90">{props.subtitle}</div>
              <div className="pt-2 text-xs text-white/85">{props.hashtags}</div>
            </div>
          </div>
        </div>

        {/* Bottom button bar */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 border-t border-gray-100 bg-white px-4 py-3 font-bold text-sm  text-gray-900 hover:bg-gray-50"
        >
          일정 만들기 <span className="text-black">+</span>
          <span className="ml-auto text-black">›</span>
        </button>
      </article>
    </Link>
  );
}
