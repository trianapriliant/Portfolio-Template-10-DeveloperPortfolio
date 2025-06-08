import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'Dashboard admin yang komprehensif untuk mengelola toko online dengan fitur analytics real-time, manajemen produk, dan sistem notifikasi.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Chart.js'],
    github: 'https://github.com/janesmith/ecommerce-dashboard',
    demo: 'https://ecommerce-dashboard-demo.vercel.app',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplikasi manajemen tugas dengan fitur drag & drop, kolaborasi tim, dan integrasi calendar untuk meningkatkan produktivitas.',
    image: '/api/placeholder/400/250',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'],
    github: 'https://github.com/janesmith/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'Aplikasi cuaca dengan interface yang clean dan animasi yang smooth, menampilkan prakiraan cuaca detail dan peta interaktif.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'API Integration', 'Mapbox', 'CSS Modules'],
    github: 'https://github.com/janesmith/weather-app',
    demo: 'https://weather-app-demo.vercel.app',
    featured: false
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Website portfolio responsive dengan dark mode, animasi smooth, dan optimisasi SEO untuk menampilkan karya secara profesional.',
    image: '/api/placeholder/400/250',
    technologies: ['Next.js', 'TailwindCSS', 'Framer Motion', 'MDX'],
    github: 'https://github.com/janesmith/portfolio',
    demo: 'https://janesmith-portfolio.vercel.app',
    featured: false
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Dashboard untuk mengelola multiple social media accounts dengan analytics, scheduling posts, dan engagement tracking.',
    image: '/api/placeholder/400/250',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/janesmith/social-dashboard',
    demo: 'https://social-dashboard-demo.vercel.app',
    featured: true
  },
  {
    id: 6,
    title: 'Expense Tracker',
    description: 'Aplikasi pencatat pengeluaran dengan kategori custom, laporan visual, dan reminder untuk membantu mengelola keuangan personal.',
    image: '/api/placeholder/400/250',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    github: 'https://github.com/janesmith/expense-tracker',
    demo: 'https://expense-tracker-demo.vercel.app',
    featured: false
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Portfolio Saya
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kumpulan proyek yang telah saya kerjakan dengan passion dan dedikasi tinggi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                      <div className="text-2xl font-bold text-primary/70">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Badge variant="secondary" className="shrink-0 ml-2">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action buttons - Mobile */}
                    <div className="flex space-x-2 md:hidden">
                      <Button size="sm" variant="default" asChild className="flex-1">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/janesmith" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
