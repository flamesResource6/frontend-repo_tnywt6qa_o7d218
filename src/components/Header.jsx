import { Rocket, Settings, User } from 'lucide-react'

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 grid place-items-center text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-gray-900">Vibe Coding</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#about" className="hover:text-gray-900">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
            <Settings size={16} />
            <span className="hidden sm:inline">Settings</span>
          </button>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-3 py-2 rounded-md">
            <User size={16} />
            <span>Sign in</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
