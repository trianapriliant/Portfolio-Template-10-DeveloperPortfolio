import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Portfolio } from '@/components/sections/Portfolio'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-ui-theme">
      <Layout>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </Layout>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
