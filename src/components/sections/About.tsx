import { motion } from 'framer-motion'
import { Code, Users, Coffee, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  {
    icon: Code,
    value: '50+',
    label: 'Projects Completed',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    value: '30+',
    label: 'Happy Clients',
    color: 'text-green-500'
  },
  {
    icon: Coffee,
    value: '500+',
    label: 'Cups of Coffee',
    color: 'text-amber-500'
  },
  {
    icon: Award,
    value: '3+',
    label: 'Years Experience',
    color: 'text-purple-500'
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tentang Saya
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mengenal lebih dekat tentang passion dan perjalanan saya di dunia teknologi
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl rotate-6"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl -rotate-3"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/70">JS</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Halo! Saya Jane, seorang Full Stack Developer dengan passion yang mendalam 
                terhadap teknologi web modern. Saya memiliki pengalaman lebih dari 3 tahun 
                dalam mengembangkan aplikasi web yang responsive dan user-friendly.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Specialisasi saya meliputi React, Next.js, TypeScript, dan Node.js. 
                Saya selalu tertarik untuk mempelajari teknologi baru dan mengimplementasikan 
                best practices dalam setiap proyek yang saya kerjakan.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Ketika tidak sedang coding, saya senang berkontribusi pada open source projects, 
                menulis artikel teknis, dan berbagi pengetahuan dengan komunitas developer.
              </p>
            </div>

            {/* Skills highlight */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'TailwindCSS', 'PostgreSQL'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-full bg-muted mb-4 ${stat.color}`}>
                      <stat.icon className="h-8 w-8" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
