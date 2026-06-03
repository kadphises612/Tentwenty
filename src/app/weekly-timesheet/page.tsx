import Timesheet from '@/components/timesheet/Timesheet';

const dateRange = [
  {
    date: '2026-06-01',
    tasks: [
      {
        id: '1',
        name: 'Homepage Development',
        project: 'Website',
        hours: 4
      },
      {
        id: '2',
        name: 'API Integration',
        project: 'Website',
        hours: 2
      }
    ]
  },
  {
    date: '2026-06-02',
    tasks: []
  },
  {
    date: '2026-06-03',
    tasks: []
  }
];

export default function Page() {
  return (
    <div className="w-full gap-4 rotate-0 opacity-100 p-24">
      <Timesheet dateRange={dateRange} />
    </div>
  );
}
