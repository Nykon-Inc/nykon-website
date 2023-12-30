import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Nykon - Empowering Businesses with Innovative SaaS Tools',
  description: "Explore Nykon's cutting-edge SaaS tools designed to streamline workflows and boost productivity. Transform your business with our intuitive software solutions. Try Nykon today!",
  keywords: "SaaS Tools,Business Software Solutions,Productivity Apps,Innovative Technology,Nykon Products"
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
