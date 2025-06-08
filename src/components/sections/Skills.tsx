import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Wrench, 
  Monitor,
  Server,
  Smartphone,
  GitBranch,
  Palette
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    color: 'text-blue-500',
    skills: [
      { name: 'React/Next.js', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '🔷' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'JavaScript (ES6+)', level: 88, icon: '🟨' },
      { name: 'HTML5 & CSS3', level: 95, icon: '🌐' },
      { name: 'Framer Motion', level: 85, icon: '✨' }
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'text-green-500',
    skills: [
      { name: 'Node.js', level: 88, icon: '🟢' },
      { name: 'Express.js', level: 85, icon: '🚀' },
      { name: 'PostgreSQL', level: 82, icon: '🐘' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'REST APIs', level: 90, icon: '🔌' },
      { name: 'GraphQL', level: 75, icon: '📊' }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    color: 'text-purple-500',
    skills: [
      { name: 'Git & GitHub', level: 92, icon: '📚' },
      { name: 'Docker', level: 78, icon: '🐳' },
      { name: 'Vercel/Netlify', level: 90, icon: '⚡' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Figma', level: 85, icon: '🎨' },
      { name: 'Postman', level: 88, icon: '📮' }
    ]
  },
  {
    title: 'Mobile & Other',
    icon: Smartphone,
    color: 'text-orange-500',
    skills: [
      { name: 'React Native', level: 80, icon: '📱' },
      { name: 'PWA Development', level: 85, icon: '📲' },
      { name: 'SEO Optimization', level: 82, icon: '🔍' },
      { name: 'Performance Tuning', level: 88, icon: '⚡' },
      { name: 'Testing (Jest)', level: 75, icon: '🧪' },
      { name: 'Agile/Scrum', level: 90, icon: '🔄' }
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Keahlian & Teknologi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kumpulan teknologi dan tools yang saya kuasai untuk mengembangkan solusi digital terbaik
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={0} 
                          className="h-2 bg-muted"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="absolute top-0 left-0 h-2 bg-primary rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Teknologi Lainnya
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'AWS', icon: '☁️' },
              { name: 'Firebase', icon: '🔥' },
              { name: 'Prisma', icon: '🔺' },
              { name: 'Redux', icon: '📦' },
              { name: 'Webpack', icon: '📦' },
              { name: 'Sass/SCSS', icon: '💅' },
              { name: 'Material-UI', icon: '🎨' },
              { name: 'Chart.js', icon: '📊' },
              { name: 'Socket.io', icon: '🔌' },
              { name: 'Linux', icon: '🐧' },
              { name: 'Photoshop', icon: '🖼️' },
              { name: 'WordPress', icon: '📝' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-background border rounded-lg p-4 text-center hover:shadow-md transition-all duration-200 cursor-default"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
