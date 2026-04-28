import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, Film, Instagram, AlertCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import SEO from '../components/SEO'

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_441tb8h'
const EMAILJS_TEMPLATE_ID = 'template_pcyil3w'
const EMAILJS_PUBLIC_KEY = 'mgoVjT6urCD5Xjmdg'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const { name, email, message } = formData
    if (!name.trim() || !email.trim() || !message.trim()) return

    setLoading(true)
    setError(false)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject: formData.subject || 'İletişim Formu',
          message: message,
          to_email: 'info@dragonfilm.com.tr',
        },
        EMAILJS_PUBLIC_KEY
      )
      
      setSent(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <SEO
        title="İletişim | Ebru Erten — Film Yapımcısı & Reklamcı"
        description="Film yapımcısı ve Reklamcı Ebru Erten ile iletişime geçin. Dragon Film & DuvaFilm — proje teklifleri, iş birlikleri ve sorularınız için. İstanbul, Türkiye."
        canonical="https://ebruerten.com/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Ebru Erten İletişim",
          "description": "Film yapımcısı Ebru Erten ile iletişim",
          "mainEntity": {
            "@type": "Person",
            "name": "Ebru Erten",
            "email": "info@dragonfilm.com.tr",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressCountry": "TR"
            }
          }
        }}
      />
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
                <a href="mailto:info@dragonfilm.com.tr" className="flex items-start gap-4 group">
                  <div className="bg-zinc-900 p-3 rounded-full text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm uppercase tracking-wider">E-posta</h4>
                    <p className="text-gray-400 group-hover:text-amber-500 transition-colors">info@dragonfilm.com.tr & ebruerten@dragonfilm.com.tr</p>
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
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <div className="bg-zinc-900 p-3 rounded-full text-gray-400 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                      <Instagram size={20} />
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-amber-400 transition-colors">@duvafilm</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/dragonfilmproduksiyon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <div className="bg-zinc-900 p-3 rounded-full text-gray-400 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                      <Instagram size={20} />
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-amber-400 transition-colors">@dragonfilmproduksiyon</span>
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
                ref={formRef}
                onSubmit={handleSubmit} 
                className="space-y-6 bg-zinc-900/50 p-8 md:p-10 rounded-xl border border-zinc-800"
              >
                <h3 className="text-2xl font-serif text-white mb-2">Mesaj Gönderin</h3>
                <p className="text-gray-500 text-sm mb-6">Formu doldurun, mesajınız doğrudan bize ulaşacaktır.</p>

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
                      disabled={loading}
                      className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all disabled:opacity-50" 
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
                      disabled={loading}
                      className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all disabled:opacity-50" 
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
                    disabled={loading}
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all disabled:opacity-50" 
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
                    disabled={loading}
                    rows={6} 
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none disabled:opacity-50" 
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
                    <span className="text-sm">Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız.</span>
                  </motion.div>
                )}

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-4 rounded-lg"
                  >
                    <AlertCircle size={20} />
                    <span className="text-sm">Mesaj gönderilemedi. Lütfen doğrudan <a href="mailto:info@dragonfilm.com.tr" className="underline">info@dragonfilm.com.tr</a> adresine e-posta gönderin.</span>
                  </motion.div>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-800 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center uppercase tracking-widest text-sm"
                >
                  {loading ? (
                    <>Gönderiliyor... <Loader2 size={18} className="ml-2 animate-spin" /></>
                  ) : (
                    <>Mesajı Gönder <Send size={18} className="ml-2" /></>
                  )}
                </button>

                <p className="text-gray-600 text-xs text-center">
                  Veya doğrudan <a href="mailto:info@dragonfilm.com.tr" className="text-amber-500 hover:underline">info@dragonfilm.com.tr</a> adresine e-posta gönderin.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
