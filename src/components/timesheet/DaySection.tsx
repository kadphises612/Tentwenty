import TaskRow from './TaskRow';
import AddTaskButton from './AddTaskButton';
import { DayData } from './types';
import NiceModal from '@ebay/nice-modal-react';
import AddTaskModal from '../tasks/AddTaskModal';

interface Props {
  day: DayData;
}

export default function DaySection({ day }: Props) {
  const formattedDate = new Date(day.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });

  const openModal = () => {
    NiceModal.show(AddTaskModal, {
      date: day.date
    });
  };

  return (
    <div className="grid grid-cols-[100px_1fr] gap-6">
      <div>
        <h3 className="text-[18px] font-semibold text-gray-900">
          {formattedDate}
        </h3>
      </div>

      <div className="space-y-3">
        {day.tasks.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}

        <AddTaskButton date={day.date} onClick={openModal} />
      </div>
    </div>
  );
}
