import { Badge } from '@/components/ui/badge'
import { notices } from '@/constants'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id)

  if (isNaN(id)) notFound()

  const notice = notices.find((f) => f.id === id)

  if (!notice) notFound()

  return (
    <div className="flex flex-col gap-10 pb-40">
      <div className="space-y-6">
        <div className="space-y-4 pb-4 border-b">
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
          <div className="space-y-1">
            <p className="text-2xl font-black">{notice.title}</p>
            <p className="text-lg text-muted-foreground/70">{notice.createdAt}</p>
          </div>
        </div>

        <p>{notice.content}</p>
      </div>

      <Link
        href="/support/notice?page=1"
        className="bg-brand/20 w-fit text-brand text-lg px-10 rounded-xl py-3 font-bold"
      >
        목록 보기
      </Link>
    </div>
  )
}
