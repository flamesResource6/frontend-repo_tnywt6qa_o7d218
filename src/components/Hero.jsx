import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Build apps faster with AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl"
        >
          Design, code, and ship in a live sandbox — your AI pair dev handles the heavy lifting.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex items-center gap-3"
        >
          <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-gray-800">
            Get Started
          </button>
          <button className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50">
            Live Demo
          </button>
        </motion.div>
        <div className="mt-10 flex items-center gap-2 text-sm text-gray-600">
          <Star className="text-yellow-500" size={16} />
          <span>Trusted by builders worldwide</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
