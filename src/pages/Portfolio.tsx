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
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fetih 1453",
    role: "Yapımcı",
    year: "2012",
    type: "Sinema Filmi",
    image: "/src/assets/projects/fetih1453/fetihkapak.png",
    link: "https://www.youtube.com/watch?v=61GX58raU4s"
  },
  {
    id: 2,
    title: "Burçlar",
    role: "Yapımcı & Senarist",
    year: "2022",
    type: "Sinema Filmi",
    image: "/src/assets/projects/burclar/burclarkapak.png",
    link: "https://www.youtube.com/watch?v=THRdleBJBUs"
  },
  {
    id: 3,
    title: "Erkekler",
    role: "Yapımcı",
    year: "2019",
    type: "Sinema Filmi",
    image: "/src/assets/projects/erkekler/erkekler.png",
    link: "https://www.youtube.com/watch?v=v-XY_VphwWw"
  },
  {
    id: 4,
    title: "Büyü 2",
    role: "Yapımcı",
    year: "2017",
    type: "Sinema Filmi",
    image: "/src/assets/projects/büyü 2/büyü2.png",
    link: "https://www.youtube.com/watch?v=Rs1EeHyalw4"
  },
  {
    id: 5,
    title: "Ali Kundilli",
    role: "Yapımcı",
    year: "2015",
    type: "Sinema Filmi",
    image: "/src/assets/projects/ali kundilli/alikundilli.png",
    link: "https://www.youtube.com/watch?v=gMOBzZejZjk"
  },
  {
    id: 6,
    title: "Dedemin İnsanları",
    role: "Yapımcı",
    year: "2011",
    type: "Sinema Filmi",
    image: "/src/assets/projects/dedemin insanları/dedemininsanları.png",
    link: "https://www.youtube.com/watch?v=vUrT9XEmwNk"
  },
  {
    id: 7,
    title: "Çılgın Dersane 3",
    role: "Yapımcı",
    year: "2014",
    type: "Sinema Filmi",
    image: "/src/assets/projects/çılgın dersane 3/çılgındersane3.png",
    link: "https://www.youtube.com/watch?v=miZ5pJ27kBo"
  },
  {
    id: 8,
    title: "Çılgın Dersane Kampta",
    role: "Yapımcı",
    year: "2008",
    type: "Sinema Filmi",
    image: "/src/assets/projects/çılgın dersane 2/çılgındersane2.png",
    link: "https://www.youtube.com/watch?v=yNbpC6DBksk"
  },
  {
    id: 9,
    title: "Çılgın Dersane Üniversitede",
    role: "Yapımcı",
    year: "2014",
    type: "TV Dizisi",
    image: "/src/assets/projects/Çılgın dersane üniversitede/çılgındersaneuni.webloc.png",
    link: "https://www.youtube.com/watch?v=1UQCA5omSVQ"
  },
  {
    id: 10,
    title: "Fatih",
    role: "Yapımcı",
    year: "2013",
    type: "TV Dizisi (Kanal D)",
    image: "/src/assets/projects/fatih dizisi/fatih.png",
    link: "https://www.youtube.com/watch?v=rUJhV9acQt8"
  },
  {
    id: 11,
    title: "Recep İvedik",
    role: "Yapımcı",
    year: "2008",
    type: "Sinema Filmi",
    image: "/src/assets/projects/recep ivedik 1/recep1.png",
    link: "https://www.youtube.com/watch?v=ite5gbn55TQ"
  },
  {
    id: 12,
    title: "Recep İvedik 2",
    role: "Yapımcı",
    year: "2009",
    type: "Sinema Filmi",
    image: "/src/assets/projects/recep ivedik 2/recep2.png",
    link: "https://www.youtube.com/watch?v=jUkm-Qz3wjc"
  },
  {
    id: 13,
    title: "Recep İvedik 3",
    role: "Yapımcı",
    year: "2010",
    type: "Sinema Filmi",
    image: "/src/assets/projects/recep ivedik 3/recep3.png",
    link: "https://www.youtube.com/watch?v=wU7yHUYWqS8"
  },
  {
    id: 14,
    title: "Romantik Komedi",
    role: "Yapımcı",
    year: "2010",
    type: "Sinema Filmi",
    image: "/src/assets/projects/romantik komedi /romantikkomedi.png",
    link: "https://www.youtube.com/watch?v=gAyUUWQPvXI"
  },
  {
    id: 15,
    title: "Beyaz Melek",
    role: "Yapımcı",
    year: "2007",
    type: "Sinema Filmi",
    image: "/src/assets/projects/beyaz melek/beyazmelek.png",
    link: "https://www.youtube.com/watch?v=Nf7CpKB530U"
  },
  {
    id: 16,
    title: "Binbir Gece",
    role: "Yapımcı",
    year: "2006",
    type: "TV Dizisi",
    image: "/src/assets/projects/binbir gece/binbirgece.png",
    link: "https://www.youtube.com/watch?v=EnWZ1g12oGI"
  },
  {
    id: 17,
    title: "Çalıkuşu",
    role: "Yapımcı",
    year: "2013",
    type: "TV Dizisi",
    image: "/src/assets/projects/çalıkuşu dizisi/çalıkuşu.png",
    link: "https://www.youtube.com/watch?v=q81xtqWpasQ"
  },
  {
    id: 18,
    title: "Hanımın Çiftliği",
    role: "Yapımcı",
    year: "2009",
    type: "TV Dizisi",
    image: "/src/assets/projects/hanımın çiftliği/hanımınciftligi.webloc.png",
    link: "https://www.youtube.com/watch?v=QZzqkUuzqjc"
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
            {projects.map((project, index) => {
              const Wrapper = project.link ? 'a' : 'div'
              const wrapperProps = project.link ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {}
              return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid group relative cursor-pointer"
              >
                <Wrapper {...wrapperProps}>
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
                </Wrapper>
              </motion.div>
            )})}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
