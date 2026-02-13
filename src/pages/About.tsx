import { motion } from 'framer-motion'
import SEO from '../components/SEO'

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <SEO
        title="Ebru Erten Hakkında | Biyografi — Film Yapımcısı & Senarist"
        description="Ebru Erten kimdir? Türkiye'nin en iyi film yapımcılarından biri olan Ebru Erten'in biyografisi. Dragon Film & DuvaFilm kurucusu, Aksoy Film ve Sea Film ile çalışmış vizyoner yapımcı ve senarist. Recep İvedik, Ali Kundilli, Çılgın Dersane yapımcısı."
        canonical="https://ebruerten.com/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Ebru Erten Hakkında",
          "description": "Ebru Erten biyografisi — Türkiye'nin en başarılı film yapımcılarından ve senaristlerinden biri",
          "mainEntity": {
            "@type": "Person",
            "name": "Ebru Erten",
            "jobTitle": "Film Yapımcısı & Senarist",
            "description": "En iyi Türk film yapımcısı ve senarist. Dragon Film & DuvaFilm kurucusu.",
            "worksFor": [
              { "@type": "Organization", "name": "Dragon Film" },
              { "@type": "Organization", "name": "DuvaFilm" }
            ],
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
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-12 border-l-4 border-amber-500 pl-6">
            Ebru Erten Hakkında
          </h1>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <p>
                Ebru Erten, dünya çapında izleyicilerle yankı uyandıran ilgi çekici hikayeler yaratmaya adanmış vizyoner bir Film Yapımcısı ve Senaristtir. Detaylara olan keskin bakış açısı ve hikaye anlatımına olan tutkusuyla, sanatsal bütünlük ve ticari başarıyı dengeleyerek sayısız projeye hayat vermiştir.
              </p>
              <p>
                Bir yapımcı olarak, çeşitli sinematik eserlerin gerçekleştirilmesinde önemli rol oynamıştır. <strong className="text-amber-500">Aksoy Film</strong> ve <strong className="text-amber-500">Sea Film</strong> gibi büyük yapım şirketleriyle işbirliği yaparak Türk sinemasının en tanınmış projelerine katkıda bulunmuştur.
              </p>
              <p>
                Geniş portföyü, sevilen komedi serisi <em>"Ali Kundilli"</em>, popüler franchise <em>"Çılgın Dersane"</em> ve Türk sinema tarihinin en çok izlenen serilerinden <em>"Recep İvedik"</em> gibi gişe rekorları kıran yapımları içermektedir. Ayrıca <strong className="text-amber-500">Kanal D</strong> için iddialı tarihi dizi <em>"Fatih"</em>in yapımcılığını üstlenerek karmaşık, büyük ölçekli prodüksiyonları yönetme yeteneğini göstermiştir.
              </p>

              {/* Dragon Film & DuvaFilm Section */}
              <div className="border-l-2 border-amber-500/50 pl-6 my-8 space-y-4">
                <h3 className="text-xl font-serif text-white">Şirketler & İş Alanları</h3>
                <div className="space-y-3">
                  <div>
                    <strong className="text-amber-500">Dragon Film</strong>
                    <span className="text-gray-400"> — </span>
                    <span className="text-gray-300">Film ve dizi yapımcılığı, senaryo geliştirme ve içerik üretimi. Dragon Film bünyesinde sinema filmleri, televizyon dizileri ve dijital platform projeleri hayata geçirilmektedir.</span>
                  </div>
                  <div>
                    <strong className="text-amber-500">DuvaFilm</strong>
                    <span className="text-gray-400"> — </span>
                    <span className="text-gray-300">Reklam filmleri, sosyal medya içerik üretimi, marka iş birlikleri ve dijital pazarlama projeleri. DuvaFilm ile markalar için yaratıcı reklam kampanyaları, tanıtım filmleri ve sosyal medya stratejileri geliştirilmektedir.</span>
                  </div>
                </div>
              </div>

              <p>
                Son olarak, <strong className="text-amber-500">Dragon Film</strong> bünyesinde 2022 yapımı "Burçlar" filminin hem yapımcılığını hem de senaristliğini üstlenmiş ve tarihi drama "Allah'ın Kılıcı: Halid Bin Velid" üzerinde çalışmalarını sürdürmektedir.
              </p>
              <p>
                Profesyonel başarılarının ötesinde, kızı Dilayla Erten de dahil olmak üzere yeni nesil sinemacılar için bir mentor ve ilham kaynağıdır. Sınırları zorlamaya ve sinemada yeni ufuklar keşfetmeye devam etmektedir.
              </p>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-zinc-900 p-6 md:p-8 rounded-lg border border-zinc-800 sticky top-32">
                <h3 className="text-xl font-serif text-white mb-6">Bağlantı</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <span className="w-20 shrink-0 text-gray-500 text-sm uppercase tracking-wider pt-1">Rol</span>
                    <span className="text-white text-sm">Yapımcı, Senarist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-20 shrink-0 text-gray-500 text-sm uppercase tracking-wider pt-1">Konum</span>
                    <span className="text-white text-sm">İstanbul, Türkiye</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-20 shrink-0 text-gray-500 text-sm uppercase tracking-wider pt-1">Film</span>
                    <span className="text-white text-sm">Dragon Film</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-20 shrink-0 text-gray-500 text-sm uppercase tracking-wider pt-1">Reklam</span>
                    <span className="text-white text-sm">DuvaFilm</span>
                  </li>
                </ul>
                
                <div className="mt-8 pt-8 border-t border-zinc-800">
                  <a href="/contact" className="block w-full py-3 bg-amber-600 hover:bg-amber-700 text-white text-center rounded transition-colors uppercase tracking-wider text-sm">
                    İletişime Geç
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
