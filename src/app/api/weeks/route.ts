import { NextRequest, NextResponse } from 'next/server';
import { getWeeksForYear } from '@/utils/week.utils';
import { connectDB } from '@/lib/mongodb';
import { Task } from '@/models/Tasks';
import { auth } from '@/auth';

export async function GET(request: NextRequest) {
  await connectDB();

  const session = await auth();

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  /**
   * extract year ,page and limit from the search Params
   */
  const year = Number(searchParams.get('year'));
  const page = Number(searchParams.get('page') ?? 1);
  const limit = Number(searchParams.get('limit') ?? 5);
  const status = searchParams.get('status');

  if (!year) {
    return NextResponse.json(
      {
        success: false,
        message: 'year is required'
      },
      { status: 400 }
    );
  }

  // Compute all the weeks of that particular year
  const weeks = getWeeksForYear(year);

  const weeksWithHours = await Promise.all(
    weeks.map(async (week) => {
      /**
       * for each paginated week , get data of the tasks done in that
       * particular week
       */
      const tasks = await Task.find({
        date: {
          $gte: new Date(week.startDate),
          $lte: new Date(week.endDate)
        }
      }).lean();

      const totalHours = tasks.reduce(
        (sum, task) => sum + Number(task.durationHours ?? 0),
        0
      );

      const status =
        totalHours === 0
          ? 'missing'
          : totalHours >= 40
            ? 'completed'
            : 'incomplete';

      return {
        ...week,
        totalHours,
        status
      };
    })
  );

  let filteredWeeks = weeksWithHours;

  if (status) {
    filteredWeeks = weeksWithHours.filter((week) => week.status === status);
  }
  const totalWeeks = filteredWeeks.length;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedWeeks = filteredWeeks.slice(startIndex, endIndex);

  return NextResponse.json({
    success: true,
    page,
    limit,
    totalWeeks,
    totalPages: Math.ceil(totalWeeks / limit),
    weeks: paginatedWeeks
  });
}
