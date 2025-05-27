'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { user } from '@/constants'
import { cn } from '@/lib/utils'
import { Book, DollarSignIcon, Medal, TagIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Progress } from './ui/progress'

const items = [
  {
    title: '게시글',
    urls: ['/'],
    icon: Book,
  },
  {
    title: '미션',
    urls: ['/mission'],
    icon: Medal,
  },
  {
    title: '구독',
    urls: ['/subscription'],
    icon: DollarSignIcon,
  },
  {
    title: '고객센터',
    urls: ['/support/notice', '/support/faq'],
    icon: TagIcon,
  },
]

export const Aside = () => {
  const pathname = usePathname()

  return (
    <Sidebar
      variant="floating"
      collapsible="offcanvas"
    >
      <SidebarContent>
        <SidebarGroup>
          <Image
            src="/eunovia.svg"
            alt="Eunovia 로고"
            width={160}
            height={40}
            className="mb-4 object-contain"
          />
          <h1 className="sr-only">Eunovia 유노비아</h1>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      'h-12 pl-3 gap-4',
                      item.urls.includes(pathname) && 'bg-primary/10 hover:bg-primary/10',
                    )}
                  >
                    <Link href={item.urls[0]}>
                      <item.icon className={cn('scale-125', item.urls.includes(pathname) && 'fill-brand/20')} />
                      <span className="text-xl font-semibold">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Link
          href="/setting/profile"
          className="flex gap-2 hover:bg-primary/5 rounded-xl p-3 pl-2"
        >
          <Image
            src={user.src}
            alt={user.alt}
            width={80}
            height={80}
            className="size-12 rounded-xl brightness-[105%] object-cover"
          />

          <div className="w-full">
            <p className="font-bold">{user.nickname}</p>
            <div className="flex w-full items-center gap-2">
              <p className="text-sm text-muted-foreground">
                <span>{(user.exp - (user.exp % 100)) / 100}</span>Lv
              </p>

              <div className="flex-1">
                <div className="h-2 bg-muted-foreground/30 rounded-[2px] overflow-hidden">
                  <Progress value={user.exp % 100} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SidebarFooter>
    </Sidebar>
  )
}
