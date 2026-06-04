'use client';

import { useRouter } from 'next/navigation';

import { ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';

import { signOut } from 'next-auth/react';
import { useClickOutside } from '@/hooks/useClickOutside';

export default function Header() {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  const user = {
    name: 'John Doe'
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    setOpen(false);
  });

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

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2   px-4 py-2">
            <span className="text-sm font-medium">{user.name}</span>

            <ChevronDown size={18} />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 rounded-xl border bg-white p-2 shadow-lg">
              <button
                className="w-full rounded-lg px-4 py-2 text-left text-sm cursor-pointer"
                onClick={() =>
                  signOut({
                    redirectTo: '/login'
                  })
                }>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
