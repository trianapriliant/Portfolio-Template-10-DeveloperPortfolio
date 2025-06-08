import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'jane.smith@example.com',
    href: 'mailto:jane.smith@example.com'
  },
  {
    icon: Phone,
    title: 'Telepon',
    content: '+62 812-3456-7890',
    href: 'tel:+6281234567890'
  },
  {
    icon: MapPin,
    title: 'Lokasi',
    content: 'Jakarta, Indonesia',
    href: 'https://maps.google.com/?q=Jakarta,Indonesia'
  }
]

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/janesmith',
    color: 'hover:text-gray-900 dark:hover:text-gray-100'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/janesmith',
    color: 'hover:text-blue-600'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    href: 'https://twitter.com/janesmith',
    color: 'hover:text-blue-400'
  }
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast({
        title: "Pesan terkirim!",
        description: "Terima kasih sudah menghubungi saya. Saya akan segera membalas pesan Anda.",
      })
      
      reset()
    } catch (error) {
      toast({
        title: "Gagal mengirim pesan",
        description: "Terjadi kesalahan. Silakan coba lagi atau hubungi saya langsung via email.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Punya proyek menarik atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Mari Terhubung</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan peluang kerja sama, proyek baru, 
                atau sekadar berbagi ide tentang teknologi. Mari ciptakan sesuatu yang luar biasa bersama!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 rounded-lg border hover:bg-muted/50 transition-colors duration-200 group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="font-semibold mb-4">Ikuti Saya</h4>
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
                    className={`p-3 rounded-full bg-muted text-muted-foreground transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama *</Label>
                      <Input
                        id="name"
                        placeholder="Nama lengkap Anda"
                        {...register('name', { 
                          required: 'Nama wajib diisi',
                          minLength: { value: 2, message: 'Nama minimal 2 karakter' }
                        })}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        {...register('email', { 
                          required: 'Email wajib diisi',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Format email tidak valid'
                          }
                        })}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek *</Label>
                    <Input
                      id="subject"
                      placeholder="Subjek pesan Anda"
                      {...register('subject', { 
                        required: 'Subjek wajib diisi',
                        minLength: { value: 5, message: 'Subjek minimal 5 karakter' }
                      })}
                      className={errors.subject ? 'border-red-500' : ''}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      rows={6}
                      {...register('message', { 
                        required: 'Pesan wajib diisi',
                        minLength: { value: 10, message: 'Pesan minimal 10 karakter' }
                      })}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
