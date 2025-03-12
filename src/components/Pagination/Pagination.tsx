/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {  useCallback } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { fetchProducts } from '@/api/api';


interface PaginationRoundedProprs {
  currentPage:number;
  setCurrentPage:(page: number) => void
}

export const  PaginationRounded: React.FC<PaginationRoundedProprs> = ({ currentPage, setCurrentPage }) => {

  const handlePageChange = useCallback(async (event: React.ChangeEvent<unknown>, value: number) => {
    try {
      await fetchProducts(value);
      setCurrentPage(value);
    } catch (error) {
      console.error(error);
    }
  }, [setCurrentPage]);

  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" onChange={handlePageChange} />
    </Stack>
  );
}