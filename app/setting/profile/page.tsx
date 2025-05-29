import { Navigator } from '@/components/navigator'
import { Title } from '@/components/title'
import { settingLinks } from '@/constants'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <Title title="설정" />

      <Suspense>
        <Navigator links={settingLinks} />
      </Suspense>

      <div>1232</div>
    </>
  )
}
