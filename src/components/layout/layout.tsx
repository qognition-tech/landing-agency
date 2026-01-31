import { Header } from './header'
import { Footer } from './footer'
import { useSmoothScroll } from '@/hooks/animations'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  useSmoothScroll()

  return (
    <div className="min-h-screen bg-qog-black text-qog-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}