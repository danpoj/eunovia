import { Paginate } from '@/components/paginate'
import { Badge } from '@/components/ui/badge'
import { FAQ_LIMIT, notices } from '@/constants'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    page: string
  }>
}) {
  const currentPage = Number((await searchParams).page)

  if (isNaN(currentPage)) redirect('?page=1')

  const currentNotices = notices.slice((currentPage - 1) * FAQ_LIMIT, currentPage * FAQ_LIMIT)
  const noticeCount = notices.length
  const lastPage = Math.ceil(noticeCount / FAQ_LIMIT)

  return (
    <>
      <div className="flex flex-col">
        {currentNotices.map((notice) => (
          <Link
            href={`/support/notice/${notice.id}`}
            key={notice.id}
            className="py-5 rounded-xl hover:opacity-80 space-y-2"
          >
            <div className="flex items-center gap-2">
              <Badge
                variant={
                  notice.badge === '필독'
                    ? 'blue-subtle'
                    : notice.badge === '업데이트'
                      ? 'teal-subtle'
                      : notice.badge === 'NEW'
                        ? 'gray-subtle'
                        : 'default'
                }
              >
                {notice.badge}
              </Badge>
              <p className="text-base md:text-lg font-bold text-primary/70">{notice.title}</p>
            </div>
            <span className="text-muted-foreground/80 text-sm md:text-base">{notice.createdAt}</span>
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
