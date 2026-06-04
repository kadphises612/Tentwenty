'use client';

import { useEffect, useState } from 'react';

import { getWeeks } from '@/services/week.service';
import { WeekSummary } from '@/types/week';

export function useTimesheets(year = 2026, initialPage = 1, initialLimit = 5) {
  const [weeks, setWeeks] = useState<WeekSummary[]>([]);
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  const [totalPages, setTotalPages] = useState(0);
  const [totalWeeks, setTotalWeeks] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadWeeks() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getWeeks(year, page, limit);

        if (!mounted) return;

        setWeeks(response.weeks);
        setTotalPages(response.totalPages);
        setTotalWeeks(response.totalWeeks);
      } catch (error) {
        if (!mounted) return;

        setError(
          error instanceof Error ? error.message : 'Something went wrong'
        );
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    loadWeeks();

    return () => {
      mounted = false;
    };
  }, [year, page, limit]);

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const updatePageSize = (pageSize: number) => {
    setPage(1);
    setLimit(pageSize);
  };

  return {
    weeks,
    page,
    limit,
    totalPages,
    totalWeeks,
    isLoading,
    error,
    setPage: goToPage,
    setLimit: updatePageSize,
    nextPage,
    previousPage
  };
}
