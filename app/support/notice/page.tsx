import { Navigator } from '@/components/navigator'
import { Paginate } from '@/components/paginate'
import { Title } from '@/components/title'
import { Badge } from '@/components/ui/badge'
import { FAQ_LIMIT, notices, supportLinks } from '@/constants'
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
    <div className="space-y-10">
      <Title
        title="고객센터"
        subTitle="유노비아 고객센터 입니다. 무엇을 도와드릴까요?"
      />

      <Navigator links={supportLinks} />

      <div className="flex flex-col">
        {currentNotices.map((notice) => (
          <Link
            href={`/support/notice/${notice.id}`}
            key={notice.id}
            className="hover:bg-primary/5 p-5 rounded-xl"
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
              <p className="text-lg font-bold text-primary/70">{notice.title}</p>
            </div>
            <span className="text-muted-foreground text-lg">{notice.createdAt}</span>
          </Link>
        ))}
      </div>

      <Paginate
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </div>
  )
}
