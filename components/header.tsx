'use client'

import { items, user } from '@/constants'
import { cn } from '@/lib/utils'
import { aiChatStore } from '@/store/ai-chat-store'
import { mobileMenuStore } from '@/store/mobile-menu-store'
import { BellIcon, BotMessageSquareIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSnapshot } from 'valtio'
import { Button } from './ui/button'
import { useMediaQuery } from 'usehooks-ts'
import { SettingDialog } from './dialogs/setting-dialog'

export const Header = () => {
  const pathname = usePathname()
  const { isOpen: isAIChatOpen } = useSnapshot(aiChatStore)
  const { isOpen: isMobileMenuOpen } = useSnapshot(mobileMenuStore)
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <header className="p-2 fixed w-full inset-x-0 border-b bg-background z-50">
      <div className="flex w-full max-w-288 mx-auto justify-between">
        <div className="flex items-center gap-1.5 md:gap-3">
          <Button
            onClick={() => (mobileMenuStore.isOpen = !mobileMenuStore.isOpen)}
            className="size-12 group md:hidden flex items-center justify-center"
            size="icon"
            variant="ghost"
          >
            <MenuIcon className="size-6 md:size-7 group-hover:stroke-primary stroke-muted-foreground" />
          </Button>

          <Link
            onClick={() => {
              if (isMobile && isMobileMenuOpen) mobileMenuStore.isOpen = false
            }}
            href="/"
            className="hover:opacity-90"
          >
            <Image
              src="/eunovia.svg"
              alt="Eunovia 로고"
              width={120}
              height={32}
              className="object-contain w-26 md:w-30"
            />
          </Link>

          <div className="hidden md:flex gap-1">
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

        <div className="flex gap-1.5 md:gap-3 items-center">
          <SettingDialog>
            <button
              className="cursor-pointer hover:opacity-80"
              onClick={() => {
                if (isMobile && isMobileMenuOpen) mobileMenuStore.isOpen = false
              }}
            >
              <Image
                src={user.src}
                alt={user.alt}
                width={80}
                height={80}
                className="size-10 md:size-12 rounded-xl brightness-105 object-cover"
              />
            </button>
          </SettingDialog>

          <Button
            onClick={() => {
              if (isMobile && isMobileMenuOpen) mobileMenuStore.isOpen = false
            }}
            className="size-10 md:size-12 group"
            size="icon"
            variant="ghost"
          >
            <BellIcon className={cn('size-6 md:size-7 group-hover:stroke-primary stroke-muted-foreground')} />
          </Button>

          <Button
            onClick={() => {
              if (isMobile && isMobileMenuOpen) mobileMenuStore.isOpen = false
              aiChatStore.isOpen = !isAIChatOpen
            }}
            className="size-10 md:size-12 group"
            size="icon"
            variant="ghost"
          >
            <BotMessageSquareIcon
              className={cn(
                'size-6 md:size-7',
                isAIChatOpen ? 'stroke-brand' : 'group-hover:stroke-primary stroke-muted-foreground',
              )}
            />
          </Button>
        </div>
      </div>
    </header>
  )
}
