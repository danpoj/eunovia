'use client'

import { items, user } from '@/constants'
import { cn } from '@/lib/utils'
import { BotMessageSquareIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { useSnapshot } from 'valtio'
import { aiChatStore } from '@/store/ai-chat-store'

export const Header = () => {
  const pathname = usePathname()
  const { isOpen } = useSnapshot(aiChatStore)

  return (
    <header className="p-2 fixed w-full inset-x-0 border-b bg-background/50 backdrop-blur-sm z-50">
      <div className="flex w-full max-w-[72rem] mx-auto justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hover:opacity-90"
          >
            <Image
              src="/eunovia.svg"
              alt="Eunovia 로고"
              width={120}
              height={32}
              className="object-contain"
            />
          </Link>

          <div className="flex gap-1">
            {items.map((item) => (
              <Link
                className={cn(
                  'font-black text-muted-foreground/60 py-2 px-3',
                  item.urls.includes(pathname) ? 'text-brand' : 'hover:text-muted-foreground/90',
                )}
                key={item.href}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Image
            src={user.src}
            alt={user.alt}
            width={80}
            height={80}
            className="size-12 rounded-xl brightness-[105%] object-cover"
          />

          <Button
            onClick={() => (aiChatStore.isOpen = !isOpen)}
            className="size-12 p-2 group"
            size="icon"
            variant="ghost"
          >
            <BotMessageSquareIcon
              className={cn(
                'size-full',
                isOpen ? 'stroke-brand' : 'group-hover:stroke-primary stroke-muted-foreground',
              )}
            />
          </Button>
        </div>
      </div>
    </header>
  )
}
