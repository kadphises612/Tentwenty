import { MoreHorizontal } from 'lucide-react';
import { Task } from './types';

interface Props {
  task: Task;
}

export default function TaskRow({ task }: Props) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
      <span className="font-medium text-gray-900">{task.name}</span>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">{task.hours} hrs</span>

        <span className="rounded bg-primary-100 px-3 py-1 text-xs text-primary-800">
          {task.project}
        </span>

        <button>
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}
