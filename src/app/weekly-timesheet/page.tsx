import Footer from '@/components/layout/Footer';
import Timesheet from '@/components/timesheet/Timesheet';
import { formatDateRange } from '@/lib/formatDate';
import { transformSummaryToDateRange } from '@/lib/formatTimesheetData';
import { getTaskSummary } from '@/services/task.service';
import { cookies } from 'next/headers';

type Props = {
  searchParams: Promise<{
    startDate?: string;
    endDate?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const { startDate = '2026-06-01', endDate = '2026-06-07' } =
    await searchParams;

  const cookieStore = await cookies();

  const summary = await getTaskSummary(startDate, endDate, cookieStore);
  const dateRange = transformSummaryToDateRange(summary);

  const weekTitle = formatDateRange(startDate, endDate);
  return (
    <div className="w-full gap-4 rotate-0 opacity-100 p-24 pt-8 pb-4">
      <Timesheet dateRange={dateRange} weekTitle={weekTitle} />

      <Footer />
    </div>
  );
}
