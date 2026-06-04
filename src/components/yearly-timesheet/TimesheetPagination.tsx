type PaginationProps = {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (page: number) => void;
};

export default function Pagination({
  page,
  totalPages,
  setPage,
  limit,
  setLimit
}: PaginationProps) {
  const getPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 9) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (page > 4) {
      pages.push('...');
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 3) {
      pages.push('...');
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex justify-between mt-4">
      <div className="inline-flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {' '}
        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="h-12 rounded-2xl border border-gray-200 bg-white px-4 pr-10 text-base font-medium text-gray-600 outline-none transition hover:border-gray-300 focus:border-gray-300
      ">
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
        </select>
      </div>
      <div className="inline-flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="border-r border-gray-200 px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">
          Previous
        </button>

        {getPages().map((item, index) =>
          item === '...' ? (
            <div
              key={`ellipsis-${index}`}
              className="border-r border-gray-200 px-5 py-3 text-sm text-gray-500">
              ...
            </div>
          ) : (
            <button
              key={item}
              onClick={() => setPage(Number(item))}
              className={`min-w-[52px] border-r border-gray-200 px-4 py-3 text-sm font-medium transition ${
                page === item
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}>
              {item}
            </button>
          )
        )}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">
          Next
        </button>
      </div>{' '}
    </div>
  );
}
