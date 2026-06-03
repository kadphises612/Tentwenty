interface Props {
  title: string;
  range: string;
  totalHours: number;
  targetHours: number;
}

export default function TimesheetHeader({
  title,
  range,
  totalHours,
  targetHours
}: Props) {
  const percentage = (totalHours / targetHours) * 100;

  return (
    <div className="flex items-start justify-between">
      <div>
        <h2 className="text-2xl leading-none font-bold">{title}</h2>

        <p className="mt-2  text-[14px] text-gray-500">{range}</p>
      </div>

      <div className="w-52">
        <div className="mb-2 text-right font-medium">
          {totalHours}/{targetHours} hrs
        </div>

        <div className="h-2 rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-orange-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
