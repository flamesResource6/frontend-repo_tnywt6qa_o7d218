import { Code2, Sparkles, Shield, Timer } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-assisted dev',
    desc: 'Generate full-stack features with intelligent defaults and clean structure.'
  },
  {
    icon: Code2,
    title: 'Modern stack',
    desc: 'React, Tailwind, FastAPI, and MongoDB — zero-config and production-ready.'
  },
  {
    icon: Timer,
    title: 'Ship faster',
    desc: 'Live preview and instant iterations so you can focus on product, not setup.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Best practices baked in for auth, validation, and API hygiene.'
  }
]

function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why builders choose us</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Everything you need to go from idea to demo in minutes.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-100 p-6 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
