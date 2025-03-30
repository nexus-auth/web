import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Providers from '@/components/providers'
import AuthGuard from '@/components/auth-guard'

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Nexus Auth'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <AuthGuard>{children}</AuthGuard>
        </Providers>
      </body>
    </html>
  )
}
