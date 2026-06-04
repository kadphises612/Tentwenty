'use client';

import { useRouter } from 'next/navigation';

import { ChevronDown } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  return (
    <header className="h-16 border-b border-slate-200 bg-white">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <h1
            className="text-[24px] font-semibold tracking-tight text-gray-900 cursor-pointer"
            onClick={() => router.push('/dashboard')}>
            ticktock
          </h1>

          <span className="text-[14px] font-medium  text-gray-900">
            Timesheets
          </span>
        </div>

        <button className="flex  items-center gap-1 text-md font-medium text-gray-500">
          <span>John Doe</span>
          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  );
}
