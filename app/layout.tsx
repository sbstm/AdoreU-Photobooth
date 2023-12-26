import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nafbar from '@/components/nafbar'
import Footer from '@/components/footer'
import SessionProvider from './SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="bg-[url('../public/home.png')]">
            <Nafbar />
            <div className="h-[150px]"></div>
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
