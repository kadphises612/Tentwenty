'use client';

import { useEffect, useState } from 'react';

import { getWeeks } from '@/services/week.service';
import { WeekStatus, WeekSummary } from '@/types/week';
import { formatDate } from '@/lib/formatDate';

export function useTimesheets(year = 2026, initialPage = 1, initialLimit = 5) {
  const [weeks, setWeeks] = useState<WeekSummary[]>([]);

  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [status, setStatus] = useState<WeekStatus | ''>('');

  const [totalPages, setTotalPages] = useState(0);
  const [totalWeeks, setTotalWeeks] = useState(0);

  const [dateRange, setDateRange] = useState({
    startDate: new Date(2026, 0, 1),
    endDate: new Date(2026, 11, 31)
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadWeeks() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getWeeks(
          year,
          page,
          limit,
          status,
          formatDate(dateRange.startDate),
          formatDate(dateRange.endDate)
        );
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
  }, [year, page, limit, status, dateRange]);

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

  const updateStatus = (newStatus: WeekStatus | '') => {
    setPage(1);
    setStatus(newStatus);
  };

  const updateDateRange = (range: { startDate: Date; endDate: Date }) => {
    setPage(1);
    setDateRange(range);
  };
  const refresh = async () => {
    setIsLoading(true);

    try {
      const response = await getWeeks(
        year,
        page,
        limit,
        status,
        formatDate(dateRange.startDate),
        formatDate(dateRange.endDate)
      );

      setWeeks(response.weeks);
      setTotalPages(response.totalPages);
      setTotalWeeks(response.totalWeeks);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    weeks,
    page,
    limit,
    status,
    totalPages,
    totalWeeks,
    isLoading,
    error,
    setPage: goToPage,
    setLimit: updatePageSize,
    setStatus: updateStatus,
    nextPage,
    previousPage,
    dateRange,
    setDateRange: updateDateRange,
    refresh
  };
}
