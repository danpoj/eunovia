import { Navigator } from '@/components/navigator'
import { Paginate } from '@/components/paginate'
import { PostsSkeleton } from '@/components/skeletons/post-skeleton'
import { Title } from '@/components/title'
import { POST_LIMIT, posts, postsLinks } from '@/constants'
import { delay } from '@/lib/utils'
import { EyeIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import { z } from 'zod'

const searchParamsSchema = z.object({
  sort: z.enum(['popular', 'recent']),
  page: z.coerce.number(),
})

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    sort: 'popular' | 'recent'
    page: string
  }>
}) {
  const params = await searchParams
  const { data, success } = searchParamsSchema.safeParse(params)

  if (!success) redirect('?sort=recent&page=1')

  const { sort, page: currentPage } = data

  return (
    <div className="space-y-10 pb-40 @container/posts">
      <Title
        title="홈"
        subTitle="선한 마음으로 걷는 길, 영적 탐구의 여정"
      />

      <Suspense>
        <Navigator links={postsLinks} />
      </Suspense>

      <Suspense
        key={`${sort}-${currentPage}`}
        fallback={<PostsSkeleton />}
      >
        <Posts
          sort={sort}
          currentPage={currentPage}
        />
      </Suspense>
    </div>
  )
}

const Posts = async ({ sort, currentPage }: { sort: 'popular' | 'recent'; currentPage: number }) => {
  await delay(200)

  const sortedPosts =
    sort === 'recent'
      ? posts.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      : sort === 'popular'
        ? posts.sort((a, b) => b.views - a.views)
        : posts

  const currentPosts = sortedPosts.slice((currentPage - 1) * POST_LIMIT, currentPage * POST_LIMIT)
  const postCount = posts.length
  const lastPage = Math.ceil(postCount / POST_LIMIT)

  return (
    <>
      <div className="grid grid-cols-1 @lg/posts:grid-cols-2 @2xl/posts:grid-cols-3 gap-2">
        {currentPosts.map((post) => (
          <Link
            href={`/post/${post.id}`}
            key={post.id}
            className="hover:bg-primary/5 border rounded-lg overflow-hidden"
          >
            <Image
              src={post.src}
              alt="dummy"
              width={260}
              height={260}
              className="w-full h-60 @lg/posts:h-44 @2xl/posts:h-60 object-cover"
            />

            <div className="flex flex-col gap-4 p-3">
              <div className="flex gap-2 items-center">
                <Image
                  src={post.src}
                  alt="dummy"
                  width={100}
                  height={100}
                  className="size-10 rounded-xl object-cover"
                />

                <div className="flex gap-1 items-center">
                  <p className="font-bold text-primary/90">{post.nickname}</p>
                  <Image
                    src={'https://i.pinimg.com/170x/61/4f/17/614f17670e4b002ad2512fa028209520.jpg'}
                    alt="dummy"
                    width={80}
                    height={80}
                    className="size-5 rounded-xl object-contain"
                  />
                </div>
              </div>

              <p className="flex flex-col gap-1">
                <span>{post.title}</span>
                <span className="text-muted-foreground text-sm">{post.content}</span>
              </p>

              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground/70">{post.createdAt}</p>

                <div className="flex gap-3">
                  <div className="flex gap-1 items-center">
                    <EyeIcon className="stroke-muted-foreground size-4" />
                    <span className="font-semibold text-muted-foreground text-xs">{post.views}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <StarIcon className="stroke-muted-foreground size-4" />
                    <span className="font-semibold text-muted-foreground text-xs">{post.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Paginate
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </>
  )
}
