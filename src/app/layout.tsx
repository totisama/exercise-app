import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import '@/app/globals.css'
import type React from 'react'
import { Header } from '@/components/header'

const saira = Saira({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Exercise App',
  description: 'Manage your exercise routines',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={saira.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
