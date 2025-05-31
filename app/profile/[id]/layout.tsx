import { Navigator } from '@/components/navigator'
import { user } from '@/constants'
import Image from 'next/image'
import { ReactNode } from 'react'

export default async function Layout({
  children,
}: {
  params: Promise<{
    id: string
  }>
  children: ReactNode
}) {
  return (
    <>
      <div className="flex gap-4">
        <Image
          src={user.src}
          alt={user.alt}
          width={200}
          height={200}
          className="size-20 md:size-32 rounded-xl brightness-105 object-cover"
        />

        <div className="space-y-1.5">
          <p className="font-bold text-xl md:text-2xl">{user.nickname}</p>
          <p className="text-sm md:text-base text-muted-foreground/80">{user.description}</p>
        </div>
      </div>

      <Navigator
        links={[
          {
            text: '전문가 글',
            href: `/profile/${user.id}/expert-posts`,
          },
          {
            text: '커뮤니티 글',
            href: `/profile/${user.id}/community-posts`,
          },
          {
            text: '댓글',
            href: `/profile/${user.id}/comments`,
          },
        ]}
      />

      {children}
    </>
  )
}
