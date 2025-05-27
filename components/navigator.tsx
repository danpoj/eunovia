'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export const Navigator = ({ links }: { links: { text: string; href: string }[] }) => {
  const pathname = usePathname()
  const sort = useSearchParams().get('sort')

  return (
    <div className="space-x-6">
      {links.map((link) => (
        <Link
          key={link.href}
          className={cn(
            'font-bold text-xl hover:opacity-80',
            pathname === link.href || (sort && link.href.includes(sort)) ? 'text-brand' : 'text-muted-foreground/80',
          )}
          href={link.href}
        >
          {link.text}
        </Link>
      ))}
    </div>
  )
}
