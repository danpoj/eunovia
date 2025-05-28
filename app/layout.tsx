import { Header } from '@/components/header'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Nanum_Gothic } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import { AIChatWrapper } from './ai-chat-wrapper'
import { MobileMenu } from '@/components/mobile-menu'

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
    <html lang="ko">
      <body className={cn('overscroll-none', nanumGothic.className)}>
        <div className="flex">
          <div className="flex flex-col w-full h-screen">
            <Suspense>
              <Header />
            </Suspense>

            <AIChatWrapper>{children}</AIChatWrapper>
          </div>
        </div>

        <MobileMenu />
      </body>
    </html>
  )
}
