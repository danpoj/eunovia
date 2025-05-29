import { Header } from '@/components/header'
import { MobileMenu } from '@/components/mobile-menu'
import { ThemeProvider } from '@/components/theme-provider'
import { ViewSizeChanger } from '@/components/view-size-changer'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Nanum_Gothic } from 'next/font/google'
import { Suspense } from 'react'
import { AIChatWrapper } from './ai-chat-wrapper'
import './globals.css'

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '유노비아 Eunovia',
  description: 'Eunovia Community',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
    >
      <body className={cn('overscroll-none', nanumGothic.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ViewSizeChanger>
            <div className="flex">
              <div className="flex flex-col w-full h-[calc(100dvh+1px)]">
                <Suspense>
                  <Header />
                </Suspense>

                <AIChatWrapper>
                  <div className="space-y-10 @container/posts">{children}</div>
                </AIChatWrapper>
              </div>
            </div>

            <MobileMenu />
          </ViewSizeChanger>
        </ThemeProvider>
      </body>
    </html>
  )
}
