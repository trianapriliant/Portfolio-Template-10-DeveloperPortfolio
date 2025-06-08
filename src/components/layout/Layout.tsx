import { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from '../sections/Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  )
}
