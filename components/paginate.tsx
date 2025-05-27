'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { composePageURL } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

export const Paginate = ({ currentPage, lastPage }: { currentPage: number; lastPage: number }) => {
  const searchParams = useSearchParams()

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={composePageURL({
              pageNumber: currentPage - 1,
              searchParamsString: searchParams.toString(),
            })}
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : undefined}
            className={currentPage <= 1 ? 'pointer-events-none opacity-50' : undefined}
          />
        </PaginationItem>

        {Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={composePageURL({
                pageNumber: page,
                searchParamsString: searchParams.toString(),
              })}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={composePageURL({
              pageNumber: currentPage + 1,
              searchParamsString: searchParams.toString(),
            })}
            aria-disabled={currentPage >= lastPage}
            tabIndex={currentPage >= lastPage ? -1 : undefined}
            className={currentPage >= lastPage ? 'pointer-events-none opacity-50' : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
