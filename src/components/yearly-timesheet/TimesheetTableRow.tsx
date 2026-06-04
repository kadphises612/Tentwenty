import { formatDateRange } from '@/lib/formatDate';
import TimesheetStatusBadge from './TimesheetStatusBadge';
import { WeekSummary } from './types';

interface Props {
  week: WeekSummary;
}

export default function TimesheetTableRow({ week }: Props) {
  const action =
    week.status === 'missing'
      ? 'Create'
      : week.status === 'incomplete'
        ? 'Update'
        : 'View';

  return (
    <tr className="border-b border-gray-200">
      <td className="px-6 py-5 bg-gray-50 w-[120px]">{week.weekNumber}</td>

      <td className="px-6 py-5 text-gray-500 text-[14px]">
        {formatDateRange(week.startDate, week.endDate)}
      </td>

      <td className="px-6 py-5 text-center">
        <TimesheetStatusBadge status={week.status} />
      </td>

      <td className="px-6 py-5 text-blue-600 text-end">{action}</td>
    </tr>
  );
}
