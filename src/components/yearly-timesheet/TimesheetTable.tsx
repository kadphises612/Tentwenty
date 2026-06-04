import { WeekSummary } from './types';
import TimesheetTableRow from './TimesheetTableRow';
import Spinner from '../layout/Spinner';

interface Props {
  weeks: WeekSummary[];
  isLoading: boolean;
}

export default function TimesheetTable({ weeks, isLoading }: Props) {
  console.log(weeks);

  return (
    <div className="overflow-hidden rounded-xl border bg-white border-gray-200">
      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b border-gray-200 border-b-2 bg-gray-50 text-left text-gray-500 font-semibold text-[12px]">
            <th className="p-4 w-[120px]">WEEK #</th>

            <th className="w-full p-4 text-start">DATE</th>

            <th className="w-full p-4 text-center">STATUS</th>

            <th className="w-full p-4 text-end px-10">ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={5} className="py-12 text-center">
                <div className="flex justify-center">
                  <Spinner />
                </div>
              </td>
            </tr>
          ) : (
            weeks.map((week) => (
              <TimesheetTableRow key={week.weekNumber} week={week} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
