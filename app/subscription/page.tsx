import { Title } from '@/components/title'
import { AwardIcon, BookIcon, BotIcon, UsbIcon, WandSparklesIcon } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <Title
        title="구독"
        subTitle="전문가의 글을 무제한으로 읽어보세요"
      />

      <div className="flex flex-col xl:flex-row gap-4">
        <button className="border bg-primary/[2%] rounded-xl p-8 w-96 space-y-6 hover:bg-primary/5 text-start block h-full">
          <div className="space-y-2">
            <p className="text-3xl font-black">베이직 멤버십</p>
            <p>기본 월 구독 서비스</p>
          </div>

          <p className="bg-brand w-full p-4 text-xl font-bold text-primary-foreground rounded text-center">
            월 9,900원
          </p>
        </button>

        <button className="border bg-primary/[2%] rounded-xl p-8 w-96 space-y-6 hover:bg-primary/5 text-start block h-full">
          <div className="space-y-2">
            <p className="text-3xl font-black">프리미엄 멤버십</p>
            <p>프리미엄 월 구독 서비스</p>
          </div>

          <p className="bg-brand w-full p-4 text-xl font-bold text-primary-foreground rounded text-center">
            월 14,900원
          </p>
        </button>
      </div>

      <div className="w-full max-w-160">
        <div className="flex justify-between items-center border-b p-4">
          <p className="font-black text-2xl">멤버십 혜택</p>

          <div className="flex gap-10 items-center">
            <p className="text-xl font-bold">베이직</p>
            <p className="text-xl font-bold">프리미엄</p>
          </div>
        </div>

        <div className="flex justify-between items-center border-b p-4">
          <p className="text-lg flex items-center gap-3">
            <BookIcon />
            전문가 글 열람
          </p>

          <div className="flex gap-10 items-center">
            <p className="text-xl">무제한</p>
            <p className="text-xl">무제한</p>
          </div>
        </div>

        <div className="flex justify-between items-center border-b p-4">
          <p className="text-lg flex items-center gap-3">
            <WandSparklesIcon />
            댓글 작성
          </p>

          <div className="flex gap-10 items-center">
            <p className="text-xl">무제한</p>
            <p className="text-xl">무제한</p>
          </div>
        </div>

        <div className="flex justify-between items-center border-b p-4">
          <p className="text-lg flex items-center gap-3">
            <BotIcon />
            AI 채팅
          </p>

          <div className="flex gap-10 items-center">
            <p className="text-xl">월 30회</p>
            <p className="text-xl">무제한</p>
          </div>
        </div>

        <div className="flex justify-between items-center border-b p-4">
          <p className="text-lg flex items-center gap-3">
            <UsbIcon />
            전문가 DM
          </p>

          <div className="flex gap-10 items-center">
            <p className="text-xl">X</p>
            <p className="text-xl">가능</p>
          </div>
        </div>

        <div className="flex justify-between items-center border-b p-4">
          <p className="text-lg flex items-center gap-3">
            <AwardIcon />
            뱃지
          </p>

          <div className="flex gap-10 items-center">
            <div className="flex items-center gap-1">
              <Image
                src={'/basic.svg'}
                alt="dummy"
                width={80}
                height={80}
                className="size-8 rounded-xl object-contain hue-rotate-30"
              />
              <span className="text-xl">뱃지</span>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={'/premium.svg'}
                alt="dummy"
                width={80}
                height={80}
                className="size-8 rounded-xl object-contain hue-rotate-90"
              />
              <span className="text-xl">뱃지</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
