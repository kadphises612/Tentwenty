'use client';
import AddTaskModal from '@/components/tasks/AddTaskModal';
import NiceModal from '@ebay/nice-modal-react';

export default function Dashboard() {
  const openModal = () => {
    NiceModal.show(AddTaskModal, {
      date: '2026-06-03'
    });
  };
  return (
    <div>
      Tentwenty App
      <button
        onClick={openModal}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white">
        Add Task
      </button>
    </div>
  );
}
