import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Task } from '@/models/Tasks';

export async function POST(req: NextRequest) {
  try {
    //connection to DB
    await connectDB();

    const body = await req.json();

    const { date, name, type, project, description, durationHours } = body;

    const requiredFields = {
      date,
      name,
      type,
      project,
      description,
      durationHours
    };

    /**
     * All fields are required so check if value is not undefined or null or should
     * not be empty
     */
    const missingField = Object.entries(requiredFields).find(
      ([, value]) =>
        value === undefined ||
        value === null ||
        (typeof value === 'string' && !value.trim())
    );

    /**
     * throw error if any required value is missing
     */
    if (missingField) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing parameter'
        },
        { status: 400 }
      );
    }

    const task = await Task.create({
      date: new Date(date),
      name: name.trim(),
      type: type.trim(),
      project: project.trim(),
      description: description.trim(),
      durationHours: Number(durationHours)
    });

    return NextResponse.json(
      {
        success: true,
        data: task
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create task error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create task'
      },
      { status: 500 }
    );
  }
}
