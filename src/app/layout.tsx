import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nykon - SaaS Solutions for Developer Tools, Medicine, Education, Logistics, Finance',
  description: 'At Nykon, we specialize in building, operating, and scaling SaaS products across diverse industries, including developer tools, medicine, education, logistics, and finance. Explore our innovative solutions designed for underrepresented niches.',
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
