import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, Film, Instagram } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const { name, email, subject, message } = formData
    if (!name.trim() || !email.trim() || !message.trim()) return

    const mailSubject = encodeURIComponent(subject || 'İletişim Formu')
    const mailBody = encodeURIComponent(
      `Ad Soyad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
    )

    window.location.href = `mailto:duvafilm@gmail.com?subject=${mailSubject}&body=${mailBody}`
    setSent(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 border-l-4 border-amber-500 pl-8 tracking-tight">
            İletişim
          </h1>
          <p className="text-gray-400 text-lg mb-16 pl-8 max-w-2xl">
            Proje teklifleri, iş birlikleri veya sorularınız için bizimle iletişime geçin.
          </p>

          <div className="grid md:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div className="space-y-6">
                <a href="mailto:duvafilm@gmail.com" className="flex items-start gap-4 group">
                  <div className="bg-zinc-900 p-3 rounded-full text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm uppercase tracking-wider">E-posta</h4>
                    <p className="text-gray-400 group-hover:text-amber-500 transition-colors">duvafilm@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-3 rounded-full text-amber-500 shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm uppercase tracking-wider">Konum</h4>
                    <p className="text-gray-400">İstanbul, Türkiye</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-3 rounded-full text-amber-500 shrink-0">
                    <Film size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm uppercase tracking-wider">Şirketler</h4>
                    <p className="text-gray-400">Dragon Film <span className="text-gray-600">•</span> DuvaFilm</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="pt-8 border-t border-zinc-800">
                <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Sosyal Medya</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/duvafilm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-zinc-900 p-3 rounded-full text-gray-400 hover:bg-amber-500 hover:text-black transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <p className="text-gray-500 text-sm leading-relaxed">
                  <strong className="text-gray-300">Hızlı Yanıt:</strong> İş birlikleri ve proje tekliflerine genellikle 24-48 saat içinde dönüş yapıyoruz.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6 bg-zinc-900/50 p-8 md:p-10 rounded-xl border border-zinc-800"
              >
                <h3 className="text-2xl font-serif text-white mb-2">Mesaj Gönderin</h3>
                <p className="text-gray-500 text-sm mb-6">Formu doldurun, mesajınız e-posta uygulamanız aracılığıyla bize ulaşacaktır.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Ad Soyad <span className="text-amber-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all" 
                      placeholder="Adınız Soyadınız" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      E-posta <span className="text-amber-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all" 
                      placeholder="ornek@email.com" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Konu</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all" 
                    placeholder="Proje teklifi, iş birliği, soru..." 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Mesaj <span className="text-amber-500">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6} 
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none" 
                    placeholder="Projenizden veya iş birliği fikrinizden bahsedin..."
                  />
                </div>

                {/* Success Message */}
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-4 rounded-lg"
                  >
                    <CheckCircle size={20} />
                    <span className="text-sm">E-posta uygulamanız açıldı. Gönderdikten sonra en kısa sürede dönüş yapacağız.</span>
                  </motion.div>
                )}

                <button 
                  type="submit" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center uppercase tracking-widest text-sm"
                >
                  Mesajı Gönder <Send size={18} className="ml-2" />
                </button>

                <p className="text-gray-600 text-xs text-center">
                  Veya doğrudan <a href="mailto:duvafilm@gmail.com" className="text-amber-500 hover:underline">duvafilm@gmail.com</a> adresine e-posta gönderin.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
