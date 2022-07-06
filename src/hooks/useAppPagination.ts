import React, { useState } from 'react';

export const useAppPagination = (
  searchParams: URLSearchParams
) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    searchParams.set('page', page.toString());
    setCurrentPage(page);
  };

  return {
    currentPage,
    handlePagination,
  };
};
