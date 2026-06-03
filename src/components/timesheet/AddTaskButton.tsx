import { Plus } from 'lucide-react';

interface Props {
  date: string;
  onClick?: (date: string) => void;
}

export default function AddTaskButton({ date, onClick }: Props) {
  return (
    <button
      onClick={() => onClick?.(date)}
      className="flex w-full font-medium text-[16px] text-gray-500 items-center justify-center rounded-lg border border-dashed hover:border-primary-700 hover:bg-primary-100 py-3 hover:text-primary-700">
      <Plus size={18} />

      <span className="ml-2 m">Add new task</span>
    </button>
  );
}
