import { CreateTaskDto } from '@/types/task';

export async function createTask(payload: CreateTaskDto) {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to create task');
  }

  return response.json();
}

export async function getTaskSummary(
  startDate: string,
  endDate: string,
  cookieHeader: string
) {
  const res = await fetch(
    `http://localhost:3000/api/tasks/summary?startDate=${startDate}&endDate=${endDate}`,
    {
      cache: 'no-store',
      headers: {
        Cookie: cookieHeader
      }
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch task summary');
  }

  return res.json();
}
