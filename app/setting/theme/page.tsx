import { Navigator } from '@/components/navigator'
import { Title } from '@/components/title'
import { settingLinks } from '@/constants'

export default function Page() {
  return (
    <div className="space-y-10">
      <Title title="설정" />

      <Navigator links={settingLinks} />
    </div>
  )
}
