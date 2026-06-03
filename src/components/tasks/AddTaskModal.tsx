'use client';

import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { X, Minus, Plus } from 'lucide-react';
import { useState } from 'react';

interface AddTaskModalProps {
  date: string;
}

export default NiceModal.create(({ date }: AddTaskModalProps) => {
  const modal = useModal();

  const [hours, setHours] = useState(12);

  if (!modal.visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl border border-gray-200 ">
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
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Select Project *
            </label>

            <select className="w-75 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
              <option disabled defaultValue="" hidden>
                Select Project
              </option>
              <option>Console Developement</option>
              <option>App Developement</option>
              <option>Desktop Developement</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Type of Work *
            </label>

            <select className="w-75 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
              <option>Bug fixes</option>
              <option>Feature</option>
              <option>Refactor</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Task Description *
            </label>

            <textarea
              rows={6}
              placeholder="Write text here..."
              className="w-full resize-none rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-gray-500">A note for extra info</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Hours *
            </label>

            <div className="inline-flex overflow-hidden rounded-lg border border-gray-200">
              <button
                type="button"
                onClick={() => setHours((h) => Math.max(1, h - 1))}
                className="border-r px-4 py-2 hover:bg-gray-50 border-gray-200">
                <Minus size={16} />
              </button>

              <div className="flex min-w-[60px] items-center justify-center">
                {hours}
              </div>

              <button
                type="button"
                onClick={() => setHours((h) => h + 1)}
                className="border-l px-4 py-2 hover:bg-gray-50 border-gray-200">
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500">Entry Date: {date}</div>
        </div>

        {/* Footer */}
        <div className="flex gap-4 border-t border-gray-200 p-6">
          <button className="flex-1 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700">
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
