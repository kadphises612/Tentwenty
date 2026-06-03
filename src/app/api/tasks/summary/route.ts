import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/lib/mongodb';
import { Task } from '@/models/Tasks';
import { getDatesInRange } from '@/lib/dates';
import { formatDate } from '@/lib/formatDate';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    /**
     * Extract startDate and endDate from queryparams
     */
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!startDate || !endDate) {
      return NextResponse.json(
        {
          success: false,
          message: 'startDate and endDate are required'
        },
        { status: 400 }
      );
    }

    /**
     * Check if they are in correct format
     */
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid date format'
        },
        { status: 400 }
      );
    }

    await connectDB();

    /**
     * Get all the tasks
     */

    const tasks = await Task.find({
      date: {
        $gte: start,
        $lte: end
      }
    })
      .sort({ date: 1 })
      .lean();

    const days: Record<
      string,
      {
        totalHours: number;
        tasks: typeof tasks;
      }
    > = {};

    // Generate every date in range
    // This ensures even dates with no tasks are returned
    const allDates = getDatesInRange(start, end);

    // Initialize all dates with empty values
    for (const date of allDates) {
      days[date] = {
        totalHours: 0,
        tasks: []
      };
    }

    // Group tasks by date and calculate daily hours
    for (const task of tasks) {
      const dateKey = formatDate(task.date);

      if (!days[dateKey]) {
        days[dateKey] = {
          totalHours: 0,
          tasks: []
        };
      }

      days[dateKey].tasks.push(task);
      days[dateKey].totalHours += Number(task.timeTaken ?? 0);
    }

    // Calculate total hours across entire range

    const totalHours = Object.values(days).reduce(
      (sum, day) => sum + day.totalHours,
      0
    );
    //final response
    return NextResponse.json({
      success: true,
      totalHours,
      days
    });
  } catch (error) {
    console.error('Summary API Error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong'
      },
      { status: 500 }
    );
  }
}
