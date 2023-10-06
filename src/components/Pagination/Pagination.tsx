"use client";
import React from "react";
import { usePaginationRange } from "@/hooks/usePagination";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

import * as PaginationStyles from "./Pagination.styles";

export type PaginationProps = React.ComponentPropsWithoutRef<"div"> & {
  isPreviousPageDisabled?: boolean;
  isNextPageDisabled?: boolean;
  handleClickNextPage: () => void;
  handleClickPreviousPage: () => void;
  page: number;
  isLoading?: boolean;
  siblingCount?: number;
  pageCount: number;
  pageSize: number;
  setPage: (v: string | number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  page,
  isPreviousPageDisabled,
  isNextPageDisabled,
  pageCount = 1,
  pageSize,
  siblingCount = 1,
  setPage,
  handleClickPreviousPage,
  handleClickNextPage,
  className,
  ...restProps
}) => {
  const currentPage = Number(page);

  const paginationRange = usePaginationRange({
    pageCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  return (
    <PaginationStyles.PaginationContainer
      className={className}
      data-testid="table-pagination-footer"
      {...restProps}
    >
      <PaginationStyles.PaginationButton
        variant="text"
        rounded
        disabled={isPreviousPageDisabled}
        onClick={handleClickPreviousPage}
      >
        <RxChevronLeft />
      </PaginationStyles.PaginationButton>
      {paginationRange.map((page, i) => {
        const isCurrentPage = currentPage === Number(page);
        const isDOTS = page === "...";

        return (
          <PaginationStyles.PaginationButton
            key={i}
            disabled={isDOTS}
            onClick={() => setPage(page)}
            isActive={isCurrentPage}
            variant="text"
          >
            {page}
          </PaginationStyles.PaginationButton>
        );
      })}
      <PaginationStyles.PaginationButton
        variant="text"
        rounded
        disabled={isNextPageDisabled}
        onClick={handleClickNextPage}
      >
        <RxChevronRight />
      </PaginationStyles.PaginationButton>
    </PaginationStyles.PaginationContainer>
  );
};

export default Pagination;
