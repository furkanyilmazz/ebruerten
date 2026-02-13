import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogType?: string
  jsonLd?: Record<string, unknown>
}

export default function SEO({
  title = 'Ebru Erten | Film Yapımcısı & Senarist',
  description = 'Ebru Erten — Türkiye\'nin en başarılı film yapımcılarından ve senaristlerinden biri. Recep İvedik, Ali Kundilli, Çılgın Dersane, Burçlar gibi gişe rekorları kıran filmlerin yapımcısı. Dragon Film & DuvaFilm kurucusu.',
  canonical,
  ogType = 'website',
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title

    // Helper to set/create meta tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    // Standard meta
    setMeta('name', 'description', description)
    setMeta('name', 'title', title)

    // Open Graph
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:url', canonical || window.location.href)
    setMeta('property', 'og:site_name', 'Ebru Erten')
    setMeta('property', 'og:locale', 'tr_TR')

    // Twitter
    setMeta('property', 'twitter:card', 'summary_large_image')
    setMeta('property', 'twitter:title', title)
    setMeta('property', 'twitter:description', description)
    setMeta('property', 'twitter:url', canonical || window.location.href)

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.setAttribute('href', canonical || `https://ebruerten.com${window.location.pathname}`)

    // JSON-LD
    const existingJsonLd = document.querySelector('script[data-seo-jsonld]')
    if (existingJsonLd) {
      existingJsonLd.remove()
    }
    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-jsonld', 'true')
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      // Cleanup dynamic JSON-LD on unmount
      const el = document.querySelector('script[data-seo-jsonld]')
      if (el) el.remove()
    }
  }, [title, description, canonical, ogType, jsonLd])

  return null
}
