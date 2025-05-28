import { Title } from '@/components/title'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const missions = [
  {
    src: 'https://media.a-ha.io/aha-qna/images/common/3D/cake.png',
    alt: '1',
    title: '회원가입 미션',
    subTitle: '반가워요! 유노비아의 회원이 되어보세요.',
    backgroundColor: 'bg-green-100 dark:bg-green-900/90',
  },
  {
    src: 'https://media.a-ha.io/aha-qna/images/common/3D/calendar.png',
    alt: '1',
    title: '출석체크 미션',
    subTitle: '매일매일 출석체크하고 경험치를 올려요.',
    backgroundColor: 'bg-blue-100 dark:bg-blue-900/90',
  },
  {
    src: 'https://media.a-ha.io/aha-qna/images/common/v2/mission/expert.png',
    alt: '1',
    title: '전문가 승인 미션',
    subTitle: '전문가가 되어 더 많은 경험치를 올려요.',
    backgroundColor: 'bg-violet-100 dark:bg-violet-900/90',
  },
  {
    src: 'https://media.a-ha.io/aha-qna/images/common/3D/write.png',
    alt: '1',
    title: '게시글 미션',
    subTitle: '게시글을 작성하고 경험치를 받아보세요.',
    backgroundColor: 'bg-lime-100 dark:bg-lime-900/90',
  },
  {
    src: 'https://media.a-ha.io/aha-qna/images/common/3D/answer.png',
    alt: '1',
    title: '댓글 미션',
    subTitle: '댓글을 남기고 경험치를 받아보세요.',
    backgroundColor: 'bg-yellow-100 dark:bg-yellow-900/90',
  },
  {
    src: 'https://media.a-ha.io/aha-qna/images/common/3D/mission_img.png',
    alt: '1',
    title: 'coming soon',
    subTitle: '앞으로 준비 될 다양한 미션을 기다려주세요!',
    backgroundColor: 'bg-green-100 dark:bg-green-900/90',
  },
]

export default function Page() {
  return (
    <div className="space-y-10 pb-40">
      <Title
        title="미션"
        subTitle="미션을 완료하고 경험치를 올려요"
      />

      <div className="flex flex-col gap-y-3">
        {missions.map((mission) => (
          <Mission
            key={mission.title}
            {...mission}
          />
        ))}
      </div>
    </div>
  )
}

const Mission = ({
  src,
  title,
  subTitle,
  alt,
  backgroundColor,
}: {
  src: string
  title: string
  subTitle: string
  alt: string
  backgroundColor: string
}) => {
  return (
    <button className={cn('rounded-xl flex px-4 py-6 gap-4 h-40 hover:opacity-90 group', backgroundColor)}>
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="object-contain group-hover:animate-pulse"
      />

      <div className="space-y-2 flex flex-col items-start">
        <p className="font-black text-2xl">{title}</p>
        <p className="text-muted-foreground text-lg">{subTitle}</p>
      </div>
    </button>
  )
}
