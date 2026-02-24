import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
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


              {/* Dragon Film & DuvaFilm Sections */}
              <div className="space-y-8 my-10">
                {/* Dragon Film Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-5 mb-5">
                    <img src="/dragon-film-logo.png" alt="Dragon Film Logo" className="w-16 h-16 object-contain" />
                    <div>
                      <h3 className="text-2xl font-serif text-white">Dragon Film</h3>
                      <p className="text-amber-500 text-sm">Film, Reklam & Prodüksiyon</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Dragon Film, sinema filmleri, reklam filmleri ve prodüksiyon alanında faaliyet gösteren bir yapım şirketidir.
                    Fikir aşamasından son post-prodüksiyona kadar tüm süreçleri bünyesinde yöneten Dragon Film,
                    yüksek kaliteli içerik üretimi ve yaratıcı hikaye anlatıcılığı ile sektörde güçlü bir yere sahiptir.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {['Sinema Filmi Yapımcılığı', 'Reklam Filmleri', 'Dizi Prodüksiyon', 'Senaryo Geliştirme', 'Post-Prodüksiyon', 'İçerik Üretimi'].map((service) => (
                      <div key={service} className="bg-black/50 border border-zinc-800 rounded-lg px-3 py-2 text-center">
                        <span className="text-gray-400 text-xs">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <span className="text-gray-500 text-sm">Referans Projeler: Burçlar, Allah'ın Kılıcı: Halid Bin Velid</span>
                    <a
                      href="https://www.instagram.com/dragonfilmproduksiyon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 transition-colors"
                    >
                      <Instagram size={16} />
                      @dragonfilmproduksiyon
                    </a>
                  </div>
                </motion.div>

                {/* DuvaFilm Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-5 mb-5">
                    <img src="/duvafilm-logo.png" alt="DuvaFilm Logo" className="w-16 h-16 object-contain" />
                    <div>
                      <h3 className="text-2xl font-serif text-white">DuvaFilm</h3>
                      <p className="text-amber-500 text-sm">Ajans, Dijital Reklam & Sosyal Medya</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    DuvaFilm, markaların dijital dünyada güçlü bir varlık göstermesini sağlayan bir ajans ve dijital reklam şirketidir.
                    Sosyal medya stratejileri, dijital reklam kampanyaları, marka iş birlikleri ve içerik üretimi alanlarında
                    kapsamlı hizmetler sunarak, markaların hedef kitleleriyle etkili bir şekilde buluşmasını sağlar.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {['Dijital Reklam', 'Sosyal Medya Yönetimi', 'Marka Stratejisi', 'İçerik Üretimi', 'Influencer Marketing', 'Kampanya Yönetimi'].map((service) => (
                      <div key={service} className="bg-black/50 border border-zinc-800 rounded-lg px-3 py-2 text-center">
                        <span className="text-gray-400 text-xs">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <span className="text-gray-500 text-sm">Yaratıcı çözümler, etkili sonuçlar</span>
                    <a
                      href="https://www.instagram.com/duvafilm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 transition-colors"
                    >
                      <Instagram size={16} />
                      @duvafilm
                    </a>
                  </div>
                </motion.div>
              </div>

            

              <p>
                Son olarak, <strong className="text-amber-500">Dragon Film</strong> bünyesinde 2022 yapımı "Burçlar" filminin hem yapımcılığını hem de senaristliğini üstlenmiş ve tarihi drama "Allah'ın Kılıcı: Halid Bin Velid" üzerinde çalışmalarını sürdürmektedir.
              </p>
              <p>
                Profesyonel başarılarının ötesinde, kızı Dilayla Erten de dahil olmak üzere yeni nesil sinemacılar için bir mentor ve ilham kaynağıdır. Sınırları zorlamaya ve sinemada yeni ufuklar keşfetmeye devam etmektedir.
              </p>


                {/* Referanslar Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="my-12"
              >
                <h3 className="text-2xl font-serif text-white mb-2 border-l-2 border-amber-500 pl-4">Referanslarımız</h3>
                <p className="text-gray-500 text-sm mb-8 pl-4">Birlikte çalıştığımız markalar ve iş ortaklarımız</p>
                
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    // Global / Uluslararası Markalar
                    { src: '/src/assets/logos/thy.png', alt: 'THY' },
                    { src: '/src/assets/logos/levis.png', alt: "Levi's" },
                    { src: '/src/assets/logos/hans-zimmer.png', alt: 'Hans Zimmer' },
                    { src: '/src/assets/logos/cj-entertainment.png', alt: 'CJ Entertainment' },
                    { src: '/src/assets/logos/crowne-plaza.png', alt: 'Crowne Plaza' },
                    { src: '/src/assets/logos/emaar.png', alt: 'Emaar' },
                    // Devlet & Kamu Kurumları
                    { src: '/src/assets/logos/trt.png', alt: 'TRT' },
                    { src: '/src/assets/logos/diyanet-isleri.png', alt: 'Diyanet İşleri' },
                    { src: '/src/assets/logos/iletisim-baskanligi.png', alt: 'İletişim Başkanlığı' },
                    { src: '/src/assets/logos/tsk.png', alt: 'TSK' },
                    { src: '/src/assets/logos/tmsf.png', alt: 'TMSF' },
                    { src: '/src/assets/logos/ziraat-bank.png', alt: 'Ziraat Bankası' },
                    // Büyük Türk Şirketleri
                    { src: '/src/assets/logos/kanal-d.png', alt: 'Kanal D' },
                    { src: '/src/assets/logos/acıbadem.png', alt: 'Acıbadem' },
                    { src: '/src/assets/logos/cengiz-insaat.png', alt: 'Cengiz İnşaat' },
                    { src: '/src/assets/logos/intercity.png', alt: 'Intercity' },
                    { src: '/src/assets/logos/liv-logo.png', alt: 'Liv Hospital' },
                    { src: '/src/assets/logos/galleria-istanbul.png', alt: 'Galleria İstanbul' },
                    { src: '/src/assets/logos/hadi-logo.png', alt: 'Hadi' },
                    { src: '/src/assets/logos/sofa-sigorta.png', alt: 'Sofa Sigorta' },
                    // Büyük Yapım Şirketleri
                    { src: '/src/assets/logos/bkm.png', alt: 'BKM' },
                    { src: '/src/assets/logos/medyapim.png', alt: 'Med Yapım' },
                    { src: '/src/assets/logos/aksoy-film.png', alt: 'Aksoy Film' },
                    { src: '/src/assets/logos/arzu-film.png', alt: 'Arzu Film' },
                    { src: '/src/assets/logos/erler-film.png', alt: 'Erler Film' },
                    { src: '/src/assets/logos/panafilm.png', alt: 'Panafilm' },
                    { src: '/src/assets/logos/limon-yapim.png', alt: 'Limon Yapım' },
                    { src: '/src/assets/logos/gold-yapim.png', alt: 'Gold Yapım' },
                    { src: '/src/assets/logos/boyut-film.png', alt: 'Boyut Film' },
                    { src: '/src/assets/logos/sea-film.png', alt: 'Sea Film' },
                    { src: '/src/assets/logos/erten-yapim.png', alt: 'Erten Yapım' },
                    { src: '/src/assets/logos/mars-entertaiment.png', alt: 'Mars Entertainment' },
                    { src: '/src/assets/logos/özenfilm.png', alt: 'Özen Film' },
                    { src: '/src/assets/logos/pastelfilm.png', alt: 'Pastel Film' },
                    { src: '/src/assets/logos/böcek-films.png', alt: 'Böcek Films' },
                    // Post-Prodüksiyon & Müzik
                    { src: '/src/assets/logos/matte-post.png', alt: 'Matte Post' },
                    { src: '/src/assets/logos/cineffect.png', alt: 'Cineffect' },
                    { src: '/src/assets/logos/melodika.png', alt: 'Melodika' },
                    { src: '/src/assets/logos/fixkim.png', alt: 'Fixkim' },
                    { src: '/src/assets/logos/orion.png', alt: 'Orion' },
                    // Eğlence & Mekan
                    { src: '/src/assets/logos/jolly-joker.png', alt: 'Jolly Joker' },
                    { src: '/src/assets/logos/dorock-xl.png', alt: 'Dorock XL' },
                    // Otomotiv
                    { src: '/src/assets/logos/majesty-motors.png', alt: 'Majesty Motors' },
                    { src: '/src/assets/logos/ssmotors.png', alt: 'SS Motors' },
                    { src: '/src/assets/logos/target-motors.png', alt: 'Target Motors' },
                    { src: '/src/assets/logos/fc-motors.png', alt: 'FC Motors' },
                    { src: '/src/assets/logos/bavaria-garage.png', alt: 'Bavaria Garage' },
                    // Diğer Markalar
                    { src: '/src/assets/logos/koyuncuoglu.png', alt: 'Koyuncuoğlu' },
                    { src: '/src/assets/logos/marka.png', alt: 'Marka' },
                    { src: '/src/assets/logos/platin-logo.png', alt: 'Platin' },
                    { src: '/src/assets/logos/rakel.png', alt: 'Rakel' },
                    { src: '/src/assets/logos/muzipo-kids.png', alt: 'Muzipo Kids' },
                    { src: '/src/assets/logos/esra-gencer.png', alt: 'Esra Gencer' },
                    { src: '/src/assets/logos/alcoholoco.png', alt: 'Alcoholoco' },
                    { src: '/src/assets/logos/loco.png', alt: 'Loco' },
                    { src: '/src/assets/logos/cleopatra-ink.png', alt: 'Cleopatra Ink' },
                    { src: '/src/assets/logos/pin-drinks.png', alt: 'Pin Drinks' },
                    { src: '/src/assets/logos/retroline.png', alt: 'Retroline' },
                    { src: '/src/assets/logos/balun.png', alt: 'Balun' },
                    { src: '/src/assets/logos/karkas-logo.png', alt: 'Karkas' },
                    { src: '/src/assets/logos/bebek-balikcisi.png', alt: 'Bebek Balıkçısı' },
                    { src: '/src/assets/logos/donerci-muhtar.png', alt: 'Dönerci Muhtar' },
                    { src: '/src/assets/logos/pasa-firini.png', alt: 'Paşa Fırını' },
                    { src: '/src/assets/logos/gm-logo.png', alt: 'GM' },
                    { src: '/src/assets/logos/zsk-logo.png', alt: 'ZSK' },
                  ].map((logo) => (
                    <div
                      key={logo.alt}
                      className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-5 flex items-center justify-center aspect-square hover:border-amber-500/40 transition-all duration-300 group"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-20 max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              
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
