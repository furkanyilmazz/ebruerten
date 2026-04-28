import { Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif font-bold text-white mb-6 tracking-widest">EBRU ERTEN</h2>
        
        <div className="flex justify-center items-start gap-8 mb-8 flex-wrap">
          <a href="https://instagram.com/ebruertenld" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-amber-400 transition-colors group">
            <Instagram size={22} />
            <span className="text-xs text-gray-500 group-hover:text-amber-400 transition-colors">@ebruertenld</span>
          </a>
          <a href="https://instagram.com/duvafilm" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-amber-400 transition-colors group">
            <Instagram size={22} />
            <span className="text-xs text-gray-500 group-hover:text-amber-400 transition-colors">@duvafilm</span>
          </a>
          <a href="https://instagram.com/dragonfilmproduksiyon" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-amber-400 transition-colors group">
            <Instagram size={22} />
            <span className="text-xs text-gray-500 group-hover:text-amber-400 transition-colors">@dragonfilmproduksiyon</span>
          </a>
          <a href="mailto:duvafilm@gmail.com" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-amber-400 transition-colors group">
            <Mail size={22} />
            <span className="text-xs text-gray-500 group-hover:text-amber-400 transition-colors">E-posta</span>
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          &copy; {currentYear} Ebru Erten. Tüm hakları saklıdır.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Film Yapımcısı & Reklamcı
        </p>
      </div>
    </footer>
  )
}
