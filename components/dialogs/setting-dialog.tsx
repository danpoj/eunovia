'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ReactNode, useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { user } from '@/constants'
import { ChevronRight, Computer, LogOutIcon, PencilIcon } from 'lucide-react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useSnapshot } from 'valtio'
import { Slider } from '../ui/slider'
import { viewSizeStore } from '@/store/view-size-store'

type Link = {
  text: string
  type: 'profile' | 'subscription' | 'view'
}

const links = [
  {
    text: '계정 설정',
    type: 'profile',
  },
  {
    text: '화면 설정',
    type: 'view',
  },
  {
    text: '구독 설정',
    type: 'subscription',
  },
] as Link[]

const policies = [
  {
    text: '서비스 이용약관',
    href: '/policy/service',
  },
  {
    text: '개인정보 처리 방침',
    href: '/policy/privacy',
  },
  {
    text: '이벤트•혜택 정보 활용 및 수신',
    href: '/policy/marketing',
  },
]

const themes = [
  {
    text: '라이트 모드',
    type: 'light',
    icon: Sun,
  },
  {
    text: '다크 모드',
    type: 'dark',
    icon: Moon,
  },
  {
    text: '시스템 색상',
    type: 'system',
    icon: Computer,
  },
]

export const SettingDialog = ({ children }: { children: ReactNode }) => {
  const [current, setCurrent] = useState<Link['type']>('profile')

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 gap-0 h-full md:h-fit rounded-none md:rounded-lg border-none md:border w-full flex flex-col">
        <DialogHeader className="border-b p-4.5 h-fit">
          <DialogTitle className="text-lg md:text-xl">설정</DialogTitle>
          <DialogDescription className="sr-only">유저 설정</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col md:flex-row h-full md:h-[30rem]">
          <div className="flex md:hidden p-5">
            {links.map((link) => (
              <Button
                key={link.type}
                onClick={() => setCurrent(link.type)}
                variant="ghost"
                className={cn(link.type === current ? 'bg-primary/[7%] hover:bg-primary/[7%]' : 'hover:bg-transparent')}
              >
                {link.text}
              </Button>
            ))}
          </div>

          <div className="hidden md:flex flex-col justify-between border-r w-40 p-2 gap-2 bg-primary/5">
            <div className="flex flex-col">
              {links.map((link) => (
                <Button
                  key={link.type}
                  onClick={() => setCurrent(link.type)}
                  variant="ghost"
                  className={cn(
                    link.type === current ? 'bg-primary/[7%] hover:bg-primary/[7%]' : 'hover:bg-transparent',
                  )}
                >
                  {link.text}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              className="hover:bg-transparent"
            >
              로그아웃 <LogOutIcon className="size-4" />
            </Button>
          </div>

          <div className="flex-1 flex flex-col overflow-y-scroll p-5 gap-6">
            {current === 'profile' && <Profile />}
            {current === 'subscription' && <Subscription />}
            {current === 'view' && <View />}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const Profile = () => {
  return (
    <>
      <div className="size-28 self-center relative">
        <Image
          src={user.src}
          alt={user.nickname}
          width={200}
          height={200}
          className="size-full object-cover rounded-xl"
        />

        <button className="absolute -right-3 -bottom-3 size-10 border bg-brand flex items-center justify-center rounded-xl cursor-pointer group">
          <PencilIcon className="stroke-primary-foreground/80 size-5 group-hover:stroke-primary-foreground" />
        </button>
      </div>

      <div className="space-y-2">
        <p className="text-sm">계정</p>

        <div className="flex items-center gap-2">
          <Image
            src="/google.svg"
            alt="google svg"
            width={28}
            height={28}
            className="border p-1.5 border-primary/20 rounded-full"
          />
          <p className="font-bold">{user.email}</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm">닉네임</p>

        <div className="flex items-center gap-2 justify-between">
          <p className="font-bold">{user.nickname}</p>
          <Button
            size="sm"
            variant="secondary"
          >
            수정
          </Button>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="text-sm">비밀번호</p>

        <Button
          size="sm"
          variant="secondary"
        >
          변경
        </Button>
      </div>

      <div className="h-px w-full bg-primary/20" />

      <div className="flex flex-col">
        {policies.map((policy) => (
          <Link
            className="text-sm py-2 flex justify-between items-center"
            href={policy.href}
            key={policy.href}
            target="_blank"
          >
            <span>{policy.text}</span>
            <ChevronRight className="stroke-primary/60" />
          </Link>
        ))}
      </div>

      <div className="h-px w-full bg-primary/20" />

      <div>
        <button className="text-sm py-2 flex justify-between items-center w-full cursor-pointer">
          <span>탈퇴하기</span>
          <ChevronRight className="stroke-primary/60" />
        </button>
      </div>
    </>
  )
}

const Subscription = () => {
  return (
    <>
      <div>TODO: 구독 설정</div>
    </>
  )
}

const View = () => {
  const { setTheme, theme } = useTheme()
  const { size } = useSnapshot(viewSizeStore)

  return (
    <>
      <div className="space-y-4">
        <p className="text-sm">화면 색상</p>

        <RadioGroup
          key={theme}
          defaultValue={theme}
          className="gap-0"
        >
          {themes.map((theme) => (
            <div
              onClick={() => setTheme(theme.type)}
              key={theme.type}
              className="flex items-center space-x-3 px-3 py-2 cursor-pointer hover:bg-primary/5"
            >
              <RadioGroupItem
                value={theme.type}
                id={theme.type}
                className="cursor-pointer"
              />
              <Label
                htmlFor={theme.type}
                className="cursor-pointer"
              >
                <theme.icon className="size-4" />
                <span>{theme.text}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <p className="text-sm">화면 크기</p>

        <Slider
          defaultValue={[size]}
          max={10}
          min={1}
          step={1}
          onValueChange={(value) => {
            viewSizeStore.size = value[0]
          }}
          className="max-w-[14rem]"
        />
      </div>
    </>
  )
}
