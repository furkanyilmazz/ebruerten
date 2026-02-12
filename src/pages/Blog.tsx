import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

const categoryColors: Record<string, string> = {
  "Sinema": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Yapım Günlüğü": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Sektör": "bg-green-500/20 text-green-400 border-green-500/30",
  "Reklam": "bg-blue-500/20 text-blue-400 border-blue-500/30",
}

export default function Blog() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 border-l-4 border-amber-500 pl-8 tracking-tight">
            Blog
          </h1>
          <p className="text-gray-400 text-lg mb-16 pl-8 max-w-2xl">
            Sinema dünyası, yapım süreçleri ve sektörel gelişmeler hakkında yazılar.
          </p>

          {/* Featured Post */}
          <Link to={`/blog/${featuredPost.slug}`} className="group block mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium border mb-4 ${categoryColors[featuredPost.category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-amber-400 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-xs text-gray-500 gap-4 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} /> {featuredPost.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-amber-500 text-sm uppercase tracking-wider font-medium group-hover:gap-3 transition-all">
                  Devamını Oku <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Other Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <Link to={`/blog/${post.slug}`} key={post.id}>
                <motion.article
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-amber-500/50 transition-all duration-300 group"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${categoryColors[post.category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3 gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-amber-500 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-amber-500 text-sm uppercase tracking-wider font-medium group-hover:gap-3 transition-all">
                      Devamını Oku <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
