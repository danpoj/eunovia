'use client'

import { mobileMenuStore } from '@/store/mobile-menu-store'
import { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import { useMediaQuery } from 'usehooks-ts'
import { items } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const MobileMenu = () => {
  const { isOpen } = useSnapshot(mobileMenuStore)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMobile && isMounted) {
      mobileMenuStore.isOpen = false
    }
  }, [isMobile, isMounted])

  if (!isOpen || !isMounted) return null

  return (
    <div className="md:hidden fixed bg-background/80 inset-0 mt-16 backdrop-blur transition animate-in fade-in">
      <div className="flex flex-col divide-y border-b">
        {items.map((item) => (
          <Link
            onClick={() => (mobileMenuStore.isOpen = false)}
            className={cn(
              'font-black text-muted-foreground/60 p-4 text-lg bg-background',
              item.urls.includes(pathname) ? 'text-brand bg-brand/10' : 'hover:text-muted-foreground/90',
            )}
            key={item.href}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
