import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 z-0 mix-blend-overlay"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-amber-500 text-sm md:text-base font-medium tracking-[0.4em] mb-6 uppercase">
              Yapımcı & Senarist
            </h2>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-serif font-bold tracking-tighter mb-8 leading-[0.9] text-white"
          >
            EBRU <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">ERTEN</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Vizyon, tutku ve sinematik mükemmellikle hikayelere hayat veriyor.
            Gelenek ve moderniteyi birleştiren sinema deneyimleri.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link 
              to="/portfolio" 
              className="px-8 py-4 bg-white text-black font-medium text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors"
            >
              Projeleri İncele
            </Link>
            <Link 
              to="/press" 
              className="px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Basın & Medya
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro / Featured Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-white">Vizyoner Yapımlar</h3>
              <p className="text-gray-400 leading-relaxed">
                Ebru Erten, etkileyici hikayelere ve yüksek prodüksiyon kalitesine odaklanarak sinema dünyasında saygın bir yer edinmiştir. Fikir aşamasından son kurguya kadar her proje, sanatsal bir keşif yolculuğudur.
              </p>
              <Link to="/about" className="text-amber-500 hover:text-amber-400 inline-flex items-center group">
                Biyografiyi Oku <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
               {/* Placeholder for Showreel or Image */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                 [Showreel / Featured Image Placeholder]
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
