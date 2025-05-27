'use client'

import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import Image from 'next/image'

export const Header = () => {
  const { isMobile } = useSidebar()

  return (
    <header className="p-2 fixed w-full border-b bg-background">
      <div className="flex items-center">
        <SidebarTrigger />
        {isMobile && (
          <Image
            src="/eunovia.svg"
            alt="Eunovia 로고"
            width={120}
            height={32}
            className="object-contain"
          />
        )}
      </div>
    </header>
  )
}
