import { Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif font-bold text-white mb-6 tracking-widest">EBRU ERTEN</h2>
        
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://instagram.com/ebruertenld" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="mailto:info@ebruerten.com" className="text-gray-400 hover:text-amber-400 transition-colors">
            <Mail size={24} />
          </a>
          {/* Add more socials as needed */}
        </div>

        <p className="text-gray-600 text-sm">
          &copy; {currentYear} Ebru Erten. Tüm hakları saklıdır.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Film Yapımcısı & Senarist
        </p>
      </div>
    </footer>
  )
}
