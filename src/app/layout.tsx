import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GridBackground from '@/components/ui/GridBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NYKON | Intelligent Operational Systems',
  description: 'NYKON builds intelligent operational systems that help modern organizations scale with visibility, precision, and control.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-offwhite min-h-screen flex flex-col font-satoshi">
        <GridBackground />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
