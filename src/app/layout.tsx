import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '@/app/globals.css'
import type React from 'react'

const nunito = Nunito({ subsets: ['latin'] })

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
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
