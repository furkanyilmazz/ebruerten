import { motion } from 'framer-motion'
import { Newspaper, Film, ExternalLink, Star } from 'lucide-react'
import SEO from '../components/SEO'

const pressItems = [
  {
    id: 1,
    title: "Ebru Erten — Filmografi ve Biyografi",
    source: "Beyazperde",
    date: "Güncel",
    description: "Ebru Erten'in yapımcılık ve senaristlik kariyerindeki tüm projeler, filmografi ve detaylı biyografi bilgileri.",
    link: "https://www.beyazperde.com/sanatcilar/sanatci-836478/",
    category: "Biyografi"
  },
  {
    id: 2,
    title: "Ebru Erten (Aksoy) — SinemaTürk Profili",
    source: "SinemaTürk",
    date: "Güncel",
    description: "Ebru Erten'in sinema sektöründeki tüm çalışmaları ve filmografia bilgileri: Ali Kundilli, Çılgın Dersane, Büyü 2 ve diğer yapımlar.",
    link: "https://www.sinematurk.com/kisi/44770/ebru-erten",
    category: "Biyografi"
  },
  {
    id: 3,
    title: "Burçlar Filmi — Kadro, Konu ve Detaylar",
    source: "HaberTürk",
    date: "2022",
    description: "Ebru Erten'in yapımcılığını ve senaristliğini üstlendiği 'Burçlar' filminin konusu, kadrosu ve tüm detayları.",
    link: "https://www.haberturk.com/burclarin-konusu-ne-burclarda-kimler-oynuyor-3530133-magazin",
    category: "Film Haberi"
  },
  {
    id: 4,
    title: "Burçlar Filmi — Film Bilgileri",
    source: "Beyazperde",
    date: "16 Eylül 2022",
    description: "Dragon Film yapımıyla hayata geçirilen 'Burçlar' filminin tüm bilgileri, fragmanı ve oyuncu kadrosu.",
    link: "https://www.beyazperde.com/filmler/film-307653/",
    category: "Film Haberi"
  },
  {
    id: 5,
    title: "Burçlar — Box Office Verileri",
    source: "Box Office Türkiye",
    date: "2022",
    description: "Burçlar filminin gişe verileri, seyirci sayıları ve vizyona giriş bilgileri.",
    link: "https://boxofficeturkiye.com/film/burclar-2022116",
    category: "Gişe"
  },
  {
    id: 6,
    title: "Ali Kundilli 2 — Film Galası",
    source: "HaberTürk",
    date: "2016",
    description: "Aksoy Film Production yapımı 'Ali Kundilli 2' filminin gala gecesi ve yapım detayları.",
    link: "https://www.haberturk.com/magazin/sinema/haber/1205178-ali-kundilli-2-galasi",
    category: "Film Haberi"
  },
  {
    id: 7,
    title: "Ali Kundilli — Film Bilgileri",
    source: "Beyazperde",
    date: "20 Şubat 2015",
    description: "Cem Gelinoğlu'nun başrolünde yer aldığı komedi filmi Ali Kundilli'nin detaylı bilgileri ve yapımcı kadrosu.",
    link: "https://www.beyazperde.com/filmler/film-233155/",
    category: "Film Haberi"
  },
  {
    id: 8,
    title: "Çılgın Dersane 3 — Film Bilgileri",
    source: "Beyazperde",
    date: "17 Ocak 2014",
    description: "Aksoy Film yapımı Çılgın Dersane serisinin üçüncü filmi hakkında detaylı bilgiler ve kadro.",
    link: "https://www.beyazperde.com/filmler/film-222870/",
    category: "Film Haberi"
  },
  {
    id: 9,
    title: "Recep İvedik — Box Office Verileri",
    source: "Box Office Türkiye",
    date: "2008",
    description: "Türk sinema tarihinin en çok izlenen serilerinden 'Recep İvedik'in gişe rakamları ve rekorları.",
    link: "https://boxofficeturkiye.com/film/recep-ivedik-200856",
    category: "Gişe"
  },
  {
    id: 10,
    title: "Büyü 2 — Film Bilgileri",
    source: "Sinemalar.com",
    date: "2017",
    description: "Ebru Erten'in yapımcılığını üstlendiği korku filmi 'Büyü 2' hakkında bilgiler.",
    link: "https://www.sinemalar.com/film/248180/buyu-2",
    category: "Film Haberi"
  },
  {
    id: 11,
    title: "Romantik Komedi — Film Bilgileri",
    source: "Beyazperde",
    date: "5 Şubat 2010",
    description: "2010 yılının en çok izlenen Türk filmlerinden 'Romantik Komedi'nin detayları.",
    link: "https://www.beyazperde.com/filmler/film-176155/",
    category: "Film Haberi"
  },
  {
    id: 12,
    title: "Dilayla Erten — Annesinin İzinde Sinema Sektöründe",
    source: "Magazinkolik",
    date: "2024",
    description: "Ebru Erten'in kızı Dilayla Erten, annesinin izinden giderek Bahçeşehir Üniversitesi sinema bölümünden mezun oldu ve yönetmenlik kariyerine başladı.",
    link: "https://www.magazinkolik.com/dilayla-erten-annesinin-izinde-sinema-sektorune-adim-atti",
    category: "Magazin"
  },
  {
    id: 13,
    title: "Dragon Film — Resmi Web Sitesi",
    source: "Dragon Film",
    date: "Güncel",
    description: "Ebru Erten'in film ve dizi yapımcılığı faaliyetlerini yürüttüğü Dragon Film Prodüksiyon'un resmi web sitesi.",
    link: "https://dragonfilm.com.tr",
    category: "Kurumsal"
  },
  {
    id: 14,
    title: "Aksoy Film Production — Resmi Web Sitesi",
    source: "Aksoy Film",
    date: "Güncel",
    description: "Recep İvedik, Ali Kundilli, Çılgın Dersane gibi gişe rekorları kıran filmlerin yapım şirketi.",
    link: "https://aksoyfilm.com.tr",
    category: "Kurumsal"
  }
]

const categoryColors: Record<string, string> = {
  "Biyografi": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Film Haberi": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Gişe": "bg-green-500/20 text-green-400 border-green-500/30",
  "Magazin": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "Kurumsal": "bg-blue-500/20 text-blue-400 border-blue-500/30"
}

export default function Press() {
  const categories = [...new Set(pressItems.map(item => item.category))]
  
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <SEO
        title="Basın & Medya | Ebru Erten — Film Yapımcısı Haberleri"
        description="Ebru Erten ile ilgili basın haberleri, film incelemeleri ve medya içerikleri. Beyazperde, SinemaTürk, HaberTürk ve diğer kaynaklarda Ebru Erten."
        canonical="https://ebruerten.com/press"
      />
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 border-l-4 border-amber-500 pl-8 tracking-tight">
            Basın & Medya
          </h1>
          <p className="text-gray-400 text-lg mb-16 pl-8 max-w-2xl">
            Ebru Erten ile ilgili haberler, film bilgileri ve medyada yer alan içerikler.
          </p>

          {/* Category Filter Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => {
              const colorClass = categoryColors[cat] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
              const count = pressItems.filter(i => i.category === cat).length
              return (
                <span key={cat} className={`px-4 py-2 rounded-full text-xs font-medium border ${colorClass}`}>
                  {cat} ({count})
                </span>
              )
            })}
          </div>

          {/* Biyografi & Profil Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8 gap-4">
               <Star className="text-amber-500" size={28} />
               <h2 className="text-2xl font-serif">Profil & Biyografi</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {pressItems.filter(i => i.category === "Biyografi").map((item, index) => (
                <motion.a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group block bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                    <ExternalLink size={16} className="text-gray-600 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3 leading-tight group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-xs text-amber-500/70 uppercase tracking-widest font-medium">
                    {item.source} • {item.date}
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Film Haberleri Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8 gap-4">
               <Newspaper className="text-amber-500" size={28} />
               <h2 className="text-2xl font-serif">Film Haberleri</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressItems.filter(i => i.category === "Film Haberi").map((item, index) => (
                <motion.a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group block bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                    <ExternalLink size={14} className="text-gray-600 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">{item.description}</p>
                  <div className="text-xs text-amber-500/70 uppercase tracking-widest font-medium">
                    {item.source} • {item.date}
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Gişe & Magazin Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8 gap-4">
               <Film className="text-amber-500" size={28} />
               <h2 className="text-2xl font-serif">Gişe & Magazin</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressItems.filter(i => i.category === "Gişe" || i.category === "Magazin").map((item, index) => (
                <motion.a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group block bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                    <ExternalLink size={14} className="text-gray-600 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">{item.description}</p>
                  <div className="text-xs text-amber-500/70 uppercase tracking-widest font-medium">
                    {item.source} • {item.date}
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Kurumsal Section */}
          <section>
            <div className="flex items-center mb-8 gap-4">
               <ExternalLink className="text-amber-500" size={28} />
               <h2 className="text-2xl font-serif">Kurumsal Bağlantılar</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {pressItems.filter(i => i.category === "Kurumsal").map((item, index) => (
                <motion.a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center gap-6 bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <ExternalLink size={20} className="text-gray-600 group-hover:text-amber-500 transition-colors shrink-0" />
                </motion.a>
              ))}
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  )
}
