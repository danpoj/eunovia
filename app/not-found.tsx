import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center mt-20 gap-10">
      <Image
        src="/doodle1.svg"
        alt="not found image"
        width={200}
        height={200}
      />

      <div className="flex flex-col gap-4 items-center">
        <p className="text-2xl font-bold">페이지를 찾을 수 없습니다.</p>

        <Link
          href="/"
          className="bg-brand/20 w-fit text-brand text-xl px-16 rounded-xl py-4 font-bold"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}
