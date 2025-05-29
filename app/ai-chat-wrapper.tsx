'use client'

import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { aiChatStore } from '@/store/ai-chat-store'
import {
  ArrowUpCircleIcon,
  BotMessageSquareIcon,
  HelpCircleIcon,
  RefreshCwIcon,
  UserCircle2Icon,
  XIcon,
} from 'lucide-react'
import { ReactNode } from 'react'
import { useSnapshot } from 'valtio'

export const AIChatWrapper = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useSnapshot(aiChatStore)

  return (
    <div className="mt-10 md:mt-14">
      <div className={cn('mx-auto w-full h-full flex', isOpen ? 'max-w-full' : 'max-w-264')}>
        <main className={cn('flex-1 px-3 py-14', isOpen ? 'max-w-264 mx-auto' : 'max-w-full')}>{children}</main>

        {isOpen && (
          <>
            <div className="lg:w-128 xl:w-160" />

            <div
              className={cn(
                'fixed border-l inset-y-0 right-0 mt-16 flex flex-col inset-x-0 w-full lg:w-128 lg:left-auto xl:w-160 transition animate-in fade-in',
              )}
            >
              <div className="p-3 border-b flex items-center justify-between bg-background">
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

              <div className="flex-1 overflow-y-scroll p-5 space-y-4 relative bg-background/95 backdrop-blur">
                <div className="flex items-start gap-2">
                  <UserCircle2Icon className="size-5 stroke-brand shrink-0" />
                  <p>종교 추천해줘.</p>
                </div>

                <div className="flex items-start gap-2">
                  <BotMessageSquareIcon className="size-5 shrink-0 stroke-primary/50" />
                  <p>
                    종교는 개인의 삶, 가치관, 세계관에 깊게 영향을 주는 문제라서 단순 추천은 조심스러워. 대신, 네가 어떤
                    걸 찾고 있는지에 따라 몇 가지 방향을 제시해볼게. 아래 질문에 대한 너의 생각에 따라 적합한 길이
                    달라질 수 있어.
                  </p>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="relative">
                    <Textarea
                      placeholder="깨달음은 어디에서 오는건가요?"
                      className="bg-brand/5 focus:border-brand focus-visible:ring-brand "
                    />

                    <button className="size-10 flex items-center justify-center absolute top-[50%] -translate-y-[50%] right-1">
                      <ArrowUpCircleIcon className="stroke-primary/30" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  )
}
