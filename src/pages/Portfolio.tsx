import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import SEO from '../components/SEO'

interface Project {
  id: number
  title: string
  role: string
  year: string
  image: string
  type: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Burçlar",
    role: "Yapımcı & Senarist",
    year: "2022",
    type: "Sinema Filmi",
    image: "/posters/burclar.png"
  },
  {
    id: 2,
    title: "Allah'ın Kılıcı: Halid Bin Velid",
    role: "Yapımcı",
    year: "2023",
    type: "Tarihi Drama",
    image: "/posters/halid_bin_velid.png"
  },
  {
    id: 3,
    title: "Büyü 2",
    role: "Yapımcı",
    year: "2017",
    type: "Sinema Filmi",
    image: "/posters/buyu2.png"
  },
  {
    id: 4,
    title: "Ali Kundilli 1 & 2",
    role: "Yapımcı",
    year: "2015",
    type: "Sinema Filmi",
    image: "/posters/ali_kundilli.png"
  },
  {
    id: 5,
    title: "Çılgın Dersane 3 & Kampta",
    role: "Yapımcı",
    year: "2014 - 2008",
    type: "Sinema Filmi",
    image: "/posters/cilgin_dersane.png"
  },
  {
    id: 6,
    title: "Çılgın Dersane Üniversitede",
    role: "Yapımcı",
    year: "2014",
    type: "TV Dizisi",
    image: "/posters/cilgin_uni.png"
  },
  {
    id: 7,
    title: "Fatih",
    role: "Yapımcı",
    year: "2013",
    type: "TV Dizisi (Kanal D)",
    image: "/posters/fatih.png"
  },
  {
    id: 8,
    title: "Recep İvedik",
    role: "Yapımcı",
    year: "2008",
    type: "Sinema Filmi",
    image: "/posters/recep_ivedik_1.png"
  },
  {
    id: 9,
    title: "Recep İvedik 2",
    role: "Yapımcı",
    year: "2009",
    type: "Sinema Filmi",
    image: "/posters/recep_ivedik_2.png"
  },
  {
    id: 10,
    title: "Recep İvedik 3",
    role: "Yapımcı",
    year: "2010",
    type: "Sinema Filmi",
    image: "/posters/recep_ivedik_3.png"
  },
  {
    id: 11,
    title: "Romantik Komedi",
    role: "Yapımcı",
    year: "2010",
    type: "Sinema Filmi",
    image: "/posters/romantik_komedi.png"
  }
]

export default function Portfolio() {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <SEO
        title="Projeler & Filmografi | Ebru Erten — Film Yapımcısı"
        description="Ebru Erten'in filmografi ve seçilmiş projeleri: Burçlar, Recep İvedik, Ali Kundilli, Çılgın Dersane, Fatih dizisi, Romantik Komedi ve daha fazlası. En iyi Türk film yapımcısının tüm yapımları."
        canonical="https://ebruerten.com/portfolio"
      />
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-12 border-l-4 border-amber-500 pl-6">
            Seçilmiş Projeler
          </h1>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid group relative cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
                  <div className="w-full relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-amber-500/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play fill="black" className="text-black ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-amber-500 uppercase tracking-widest mb-2 font-medium">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{project.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
