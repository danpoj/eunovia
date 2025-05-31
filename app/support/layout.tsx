import { Navigator } from '@/components/navigator'
import { Title } from '@/components/title'
import { supportLinks } from '@/constants'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Title
        title="고객센터"
        subTitle="유노비아 고객센터 입니다. 무엇을 도와드릴까요?"
      />

      <Navigator links={supportLinks} />

      {children}
    </>
  )
}
