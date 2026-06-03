'use client';

import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Minus, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { createTask } from '@/services/task.service';

interface AddTaskModalProps {
  date: string;
}

export default NiceModal.create(({ date }: AddTaskModalProps) => {
  const modal = useModal();

  //State for form
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    project: '',
    description: '',
    durationHours: 1
  });

  /** Common function to update the related state from UI */
  const updateField = <K extends keyof typeof formData>(
    field: K,
    value: (typeof formData)[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  // function to submit task entry to DB.
  const handleSubmit = async () => {
    try {
      if (
        !formData.name ||
        !formData.project ||
        !formData.type ||
        !formData.description
      ) {
        toast.error('Please fill all required fields');
        return;
      }

      await createTask({
        date,
        ...formData
      });

      toast.success('Task added successfully');
      modal.hide();
    } catch (error) {
      console.error(error);

      toast.error('Failed to create task');
    }
  };

  if (!modal.visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-xl border border-gray-200 bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">Add New Entry</h2>

          <button
            onClick={() => modal.hide()}
            className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-5 p-6">
          {/* Task Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Task Name *
            </label>

            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="Enter task name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Project */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Select Project *
            </label>

            <select
              value={formData.project}
              onChange={(e) => updateField('project', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
              <option value="" disabled>
                Select Project
              </option>

              <option value="Console Development">Console Development</option>

              <option value="App Development">App Development</option>

              <option value="Desktop Development">Desktop Development</option>
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Type of Work *
            </label>

            <select
              value={formData.type}
              onChange={(e) => updateField('type', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
              <option value="" disabled>
                Select Type
              </option>

              <option value="Bug fixes">Bug fixes</option>
              <option value="Feature">Feature</option>
              <option value="Refactor">Refactor</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Task Description *
            </label>

            <textarea
              rows={6}
              value={formData.description}
              onChange={(e) => updateField('description', e.target.value)}
              placeholder="Write text here..."
              className="w-full resize-none rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-gray-500">A note for extra info</p>
          </div>

          {/* Hours */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Hours *
            </label>

            <div className="inline-flex overflow-hidden rounded-lg border border-gray-200">
              <button
                type="button"
                onClick={() =>
                  updateField(
                    'durationHours',
                    Math.max(1, formData.durationHours - 1)
                  )
                }
                className="border-r border-gray-200 px-4 py-2 hover:bg-gray-50">
                <Minus size={16} />
              </button>

              <div className="flex min-w-[60px] items-center justify-center">
                {formData.durationHours}
              </div>

              <button
                type="button"
                onClick={() =>
                  updateField('durationHours', formData.durationHours + 1)
                }
                className="border-l border-gray-200 px-4 py-2 hover:bg-gray-50">
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500">Entry Date: {date}</div>
        </div>

        {/* Footer */}
        <div className="flex gap-4 border-t border-gray-200 p-6">
          <button
            onClick={handleSubmit}
            className="flex-1 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700">
            Add Entry
          </button>

          <button
            onClick={() => modal.hide()}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
});
