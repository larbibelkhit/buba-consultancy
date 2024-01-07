import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Buba Consultancy',
  description: 'Evelate Your Restaurant to the Next Level',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-container padding-container relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
