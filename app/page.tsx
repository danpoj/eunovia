import { Navigator } from '@/components/navigator'
import { Paginate } from '@/components/paginate'
import { PostsSkeleton } from '@/components/skeletons/post-skeleton'
import { Title } from '@/components/title'
import { POST_LIMIT, posts, postsLinks } from '@/constants'
import { delay } from '@/lib/utils'
import { EyeIcon, HeartIcon, MessagesSquareIcon } from 'lucide-react'
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
    <div className="space-y-10 pb-40">
      <Title
        title="게시글"
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
      <div className="divide-y">
        {currentPosts.map((post) => (
          <Link
            href={`/post/${post.id}`}
            key={post.id}
            className="p-3 space-y-4 flex flex-col hover:bg-primary/5"
          >
            <div className="flex gap-2 items-center">
              <Image
                src={post.src}
                alt="dummy"
                width={100}
                height={100}
                className="size-12 rounded-xl object-cover"
              />
              <div className="flex gap-1 items-center">
                <p className="font-bold text-lg text-primary/90">{post.nickname}</p>
                <Image
                  src={'https://i.pinimg.com/170x/61/4f/17/614f17670e4b002ad2512fa028209520.jpg'}
                  alt="dummy"
                  width={80}
                  height={80}
                  className="size-6 rounded-xl object-contain"
                />

                <p className="text-muted-foreground/80">/ {post.createdAt}</p>
              </div>
            </div>

            <p className="space-x-2">
              <span className="text-xl">{post.title}</span>
              <span className="text-muted-foreground">| {post.content}</span>
            </p>

            <div className="flex gap-3 self-end">
              <div className="flex gap-1">
                <EyeIcon className="stroke-muted-foreground size-5" />
                <span className="font-semibold text-muted-foreground text-sm">{post.views}</span>
              </div>
              <div className="flex gap-1">
                <MessagesSquareIcon className="stroke-muted-foreground size-5" />
                <span className="font-semibold text-muted-foreground text-sm">{post.comments}</span>
              </div>
              <div className="flex gap-1">
                <HeartIcon className="stroke-muted-foreground size-5" />
                <span className="font-semibold text-muted-foreground text-sm">{post.likes}</span>
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
