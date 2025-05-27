import { Aside } from '@/components/aside'
import { Header } from '@/components/header'
import { SidebarProvider } from '@/components/ui/sidebar'
import type { Metadata } from 'next'
import { Nanum_Gothic } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
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
          <SidebarProvider>
            <Aside />

            <div className="flex flex-col w-full h-screen">
              <Header />

              <main className="mt-24 p-3 max-w-[80rem] mx-auto w-full h-full">{children}</main>
            </div>
          </SidebarProvider>
        </div>
      </body>
    </html>
  )
}
