"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";

import Cart from "@/components/Cart/Cart";
import { PaginationRounded } from "@/components/Pagination/Pagination";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Box>
      <Cart currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Box display="flex" justifyContent="center" mt={2}>
        <PaginationRounded
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </Box>
  );
}
