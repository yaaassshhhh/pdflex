import { cn } from '@/lib/util'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import "simplebar-react/dist/simplebar.min.css"

import "react-loading-skeleton/dist/skeleton.css"
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PDFlex',
  description: 'developed by Kumar Ayush',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>

      <Providers>
        <body className={cn(
          'min-h-screen font-sans antialiased grainy',
          inter.className
        )}>
          <Toaster />
          <Navbar />
          {children}
        </body>
      </Providers>

    </html>
  )
}
