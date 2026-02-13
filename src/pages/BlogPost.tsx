import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, ChevronRight } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import ReactMarkdown from 'react-markdown'
import SEO from '../components/SEO'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="pt-32 pb-20 bg-black min-h-screen text-white">
        <SEO title="Yazı Bulunamadı | Ebru Erten" description="Aradığınız blog yazısı bulunamadı." />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-serif mb-6">Yazı Bulunamadı</h1>
          <p className="text-gray-400 mb-8">Aradığınız blog yazısı mevcut değil.</p>
          <Link to="/blog" className="text-amber-500 hover:text-amber-400 transition-colors">
            ← Blog'a Dön
          </Link>
        </div>
      </div>
    )
  }

  // Find related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2)

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <SEO
        title={`${post.title} | Ebru Erten Blog`}
        description={post.excerpt}
        canonical={`https://ebruerten.com/blog/${post.slug}`}
        ogType="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "datePublished": post.date,
          "author": {
            "@type": "Person",
            "name": "Ebru Erten",
            "url": "https://ebruerten.com",
            "jobTitle": "Film Yapımcısı & Senarist"
          },
          "publisher": {
            "@type": "Person",
            "name": "Ebru Erten",
            "url": "https://ebruerten.com"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://ebruerten.com/blog/${post.slug}`
          }
        }}
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-8 gap-2">
            <Link to="/" className="hover:text-amber-500 transition-colors">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-amber-500 transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400 truncate">{post.title}</span>
          </div>

          {/* Category Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-6">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-10 gap-6">
            <span className="flex items-center gap-2">
              <User size={16} className="text-amber-500/70" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-amber-500/70" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-amber-500/70" />
              {post.readTime} okuma
            </span>
          </div>

          {/* Hero Image */}
          <div className="aspect-[21/9] rounded-xl overflow-hidden mb-12 border border-zinc-800">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <article className="prose prose-invert prose-amber max-w-none 
            prose-headings:font-serif prose-headings:text-white 
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-amber-500 prose-h2:pl-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-amber-400
            prose-h4:text-lg prose-h4:text-gray-300
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
            prose-li:text-gray-300 prose-li:text-lg
            prose-strong:text-amber-500
            prose-em:text-gray-200
            prose-blockquote:border-amber-500 prose-blockquote:bg-zinc-900 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-blockquote:text-gray-300 prose-blockquote:text-xl prose-blockquote:font-serif
            prose-ul:space-y-2
            prose-ol:space-y-2
          ">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>

          {/* Divider */}
          <div className="my-16 border-t border-zinc-800" />

          {/* Author Box */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-16">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                <User size={28} className="text-amber-500" />
              </div>
              <div>
                <h4 className="text-lg font-serif text-white mb-2">{post.author}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Film yapımcısı ve senarist. Dragon Film ve DuvaFilm kurucusu. Burçlar, Ali Kundilli, Çılgın Dersane gibi yapımların arkasındaki isim.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="text-2xl font-serif text-white mb-8">İlgili Yazılar</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="group block bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-amber-500/50 transition-colors"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-serif font-bold text-white group-hover:text-amber-500 transition-colors mb-2">
                        {related.title}
                      </h4>
                      <p className="text-gray-500 text-sm">{related.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider font-medium"
            >
              <ArrowLeft size={16} />
              Tüm Yazılar
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
