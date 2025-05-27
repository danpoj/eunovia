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
  title: 'Eunovia',
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

              <main className="p-2 w-full max-w-[72rem] mx-auto mt-10">{children}</main>
            </div>
          </SidebarProvider>
        </div>
      </body>
    </html>
  )
}
