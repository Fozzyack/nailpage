import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Chelsea's Nails",
  description: 'Perths bubbliest Nail Salon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior: 'smooth'}}>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
