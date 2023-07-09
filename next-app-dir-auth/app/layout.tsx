import './bootstrap.min.css'
import './globals.css'

import type { Metadata } from 'next'
import { Navbar } from './shared'

export const metadata: Metadata = {
  title: 'Custom Auth',
  description: 'Custom Auth With NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className='w-100 px-2 py-4 bg-dark mb-4'>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  )
}
