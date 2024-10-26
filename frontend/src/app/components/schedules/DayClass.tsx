import { ClassData } from "@/types/scheduleTypes.ts";

interface DayClassProps extends ClassData {
  className?: string;
}

export default function DayClass({
  classTitle,
  location,
  timeStart,
  timeEnd,
  bgColor,
  className = "",
}: DayClassProps) {
  return (
    <div
      className={`w-full rounded-lg p-4 ${bgColor} transition duration-150 ease-in-out hover:bg-black ${className}`}
    >
      <div className="flex justify-between">
        <div className="space-y-1">
          <h2 className="font-bold text-white">{classTitle}</h2>
          {location && <p className="text-sm text-white/90">{location}</p>}
        </div>
        <div className="text-right text-sm text-white/90">
          <p>{timeStart}</p>
          <p>{timeEnd}</p>
        </div>
      </div>
    </div>
  );
}
