import React, { useState } from 'react';

export const useAppPagination = (
  searchParams: URLSearchParams,
  count?: number
) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    searchParams.set('page', page.toString());
    setCurrentPage(page);
  };

  const pagesCount = count ? Math.ceil(count / 9) : null;

  return {
    currentPage,
    handlePagination,
    pagesCount,
  };
};
