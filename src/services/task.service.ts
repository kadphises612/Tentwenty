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
