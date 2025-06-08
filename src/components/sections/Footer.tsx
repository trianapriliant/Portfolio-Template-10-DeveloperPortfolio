import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const quickLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Kontak', href: '#contact' },
]

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/janesmith',
    hoverColor: 'hover:text-gray-900 dark:hover:text-gray-100'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/janesmith',
    hoverColor: 'hover:text-blue-600'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    href: 'https://twitter.com/janesmith',
    hoverColor: 'hover:text-blue-400'
  },
  {
    icon: Mail,
    name: 'Email',
    href: 'mailto:jane.smith@example.com',
    hoverColor: 'hover:text-green-600'
  }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Jane Smith
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                Full Stack Developer yang passionate dalam menciptakan pengalaman digital 
                yang luar biasa dengan teknologi modern dan desain yang user-friendly.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`p-2 rounded-full bg-background text-muted-foreground transition-all duration-200 ${social.hoverColor} hover:shadow-md`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 jane.smith@example.com</p>
                <p>📱 +62 812-3456-7890</p>
                <p>📍 Jakarta, Indonesia</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-muted-foreground mb-4 md:mb-0"
            >
              <span>© {currentYear} Jane Smith. Dibuat dengan</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>menggunakan React & TypeScript</span>
            </motion.div>

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                Kembali ke Atas
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top - Mobile */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 md:hidden z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </footer>
  )
}
