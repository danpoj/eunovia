import { Posts } from '@/components/posts'
import { PostsSkeleton } from '@/components/skeletons/post-skeleton'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import { z } from 'zod'

const searchParamsSchema = z.object({
  page: z.coerce.number(),
})

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    searchParams: {
      page: string
    }
  }>
}) {
  const params = await searchParams
  const { data, success } = searchParamsSchema.safeParse(params)

  if (!success) redirect('?sort=recent&page=1')

  const { page: currentPage } = data

  return (
    <>
      <Suspense
        key={`${'recent'}-${currentPage}`}
        fallback={<PostsSkeleton />}
      >
        <Posts
          sort={'recent'}
          currentPage={currentPage}
        />
      </Suspense>
    </>
  )
}
