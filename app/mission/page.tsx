import { Title } from '@/components/title'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <Title title="미션" />

      <div className="grid grid-cols-3">
        <Mission />
        <Mission />
        <Mission />
        <Mission />
        <Mission />
      </div>
    </div>
  )
}

const Mission = () => {
  return (
    <div className="bg-blue-100">
      <div>
        <p>회원가입 미션</p>
        <p>
          <span>반가워요!</span>
          <span>유노비아의 회원이 되어보세요.</span>
        </p>
      </div>

      <Image
        src="https://media.a-ha.io/aha-qna/images/common/3D/cake.png"
        alt="1"
        width={100}
        height={100}
      />
    </div>
  )
}
