import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yerkezhan Abdullayeva | Portfolio',
  description: 'Yerkezhan Abdullayeva Portfolio - NLP and Machine Learning Specialist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SidebarProvider>
          <AppSidebar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  )
}

