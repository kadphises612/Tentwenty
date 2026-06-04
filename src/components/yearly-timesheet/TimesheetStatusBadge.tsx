interface Props {
  status: 'completed' | 'incomplete' | 'missing';
}

export default function TimesheetStatusBadge({ status }: Props) {
  const styles = {
    completed: 'bg-green-100 text-green-700',
    incomplete: 'bg-yellow-100 text-yellow-700',
    missing: 'bg-pink-100 text-pink-700'
  };

  return (
    <span
      className={`rounded-md px-3 py-1 text-xs font-semibold uppercase ${styles[status]}`}>
      {status}
    </span>
  );
}
