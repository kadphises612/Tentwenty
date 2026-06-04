import Dashboard from '@/components/yearly-timesheet/Dashboard';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Footer from '@/components/layout/Footer';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return (
    <div className="w-full rotate-0 opacity-100 p-30 pt-8 pb-4">
      <div className="rounded-xl bg-white p-8 shadow">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Your Timesheets
        </h1>
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}
