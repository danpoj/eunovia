import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { user } from '@/constants'
import Image from 'next/image'

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string
  }>
}) {
  const id = (await params).id

  return (
    <>
      <Title
        title="유저 프로필"
        subTitle={`USER_ID: ${id}`}
      />

      <div className="flex items-center gap-4">
        <Image
          src={user.src}
          alt={user.alt}
          width={200}
          height={200}
          className="size-24 md:size-40 rounded-xl brightness-105 object-cover"
        />

        <p className="font-bold text-muted-foreground/80">{user.nickname}</p>
      </div>

      <div className="flex gap-2 text-lg md:text-xl font-bold pb-4 border-b">
        <Button variant="secondary">게시글</Button>
        <Button variant="secondary">댓글</Button>
      </div>

      <div>
        <p>TODO: 게시글 / 댓글 / 팔로잉 / 팔로워</p>
      </div>
    </>
  )
}
