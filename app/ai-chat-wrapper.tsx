'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { aiChatStore } from '@/store/ai-chat-store'
import { BotMessageSquareIcon, HelpCircleIcon, RefreshCwIcon, UserCircle2Icon, UserIcon, XIcon } from 'lucide-react'
import { ReactNode } from 'react'
import { useSnapshot } from 'valtio'

export const AIChatWrapper = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useSnapshot(aiChatStore)

  return (
    <div className={cn('mt-16 mx-auto w-full h-full flex', isOpen ? 'max-w-full' : 'max-w-[66rem]')}>
      <main className={cn('flex-1 px-3 py-14', isOpen ? 'max-w-[66rem] mx-auto' : 'max-w-full')}>{children}</main>

      {isOpen && (
        <>
          <div className="w-[32rem]" />

          <div className="fixed border-l bg-background inset-y-0 right-0 mt-16 w-[32rem] flex flex-col">
            <div className="p-3 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">AI 채팅</p>
                <HelpCircleIcon className="size-4 stroke-primary/60" />
              </div>

              <div className="space-x-2">
                <Button
                  size="icon"
                  variant="outline"
                >
                  <RefreshCwIcon className="size-5" />
                </Button>
                <Button
                  onClick={() => (aiChatStore.isOpen = false)}
                  size="icon"
                  variant="outline"
                >
                  <XIcon className="size-5" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-scroll p-5 text-sm space-y-4 relative">
              <div className="flex items-start gap-2">
                <UserCircle2Icon className="size-5 stroke-brand shrink-0" />
                <p>종교 추천해줘.</p>
              </div>

              <div className="flex items-start gap-2">
                <BotMessageSquareIcon className="size-5 shrink-0 stroke-primary/50" />
                <p>
                  종교는 개인의 삶, 가치관, 세계관에 깊게 영향을 주는 문제라서 단순 추천은 조심스러워. 대신, 네가 어떤
                  걸 찾고 있는지에 따라 몇 가지 방향을 제시해볼게. 아래 질문에 대한 너의 생각에 따라 적합한 길이 달라질
                  수 있어.
                </p>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5">
                <Textarea className="bg-brand/5 focus:border-brand focus-visible:ring-brand" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
