import { POST_LIMIT, posts } from '@/constants'
import { delay } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Paginate } from './paginate'

export const Posts = async ({ sort, currentPage }: { sort: 'popular' | 'recent'; currentPage: number }) => {
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
                <p className="text-muted-foreground/80 text-xs md:text-sm">{post.createdAt}</p>

                <div className="flex gap-3 items-center">
                  <p className="font-semibold text-muted-foreground/60 text-xs"> 조회 {post.views}</p>

                  <p className="font-semibold text-muted-foreground/60 text-xs">추천 {post.likes}</p>
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
