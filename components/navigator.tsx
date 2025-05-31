'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export const Navigator = ({ links }: { links: { text: string; href: string }[] }) => {
  return (
    <Suspense>
      <NavigatorContents links={links} />
    </Suspense>
  )
}

const NavigatorContents = ({ links }: { links: { text: string; href: string }[] }) => {
  const pathname = usePathname()
  const sort = useSearchParams().get('sort')

  return (
    <div className="flex border-b gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          className={cn(
            'font-bold md:text-lg hover:opacity-80 py-2.5 block w-full max-w-[10rem] text-center',
            pathname === link.href || (sort && link.href.includes(sort))
              ? 'text-brand border-b-[3px] border-brand/90'
              : 'text-muted-foreground/80',
          )}
          href={link.href}
        >
          {link.text}
        </Link>
      ))}
    </div>
  )
}
