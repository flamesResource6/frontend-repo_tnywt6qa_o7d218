import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const [visits] = useState(() => {
    try {
      const current = Number(localStorage.getItem('visits') || '0') + 1
      localStorage.setItem('visits', String(current))
      return current
    } catch {
      return 1
    }
  })

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 text-xs text-gray-500">Session visits: {visits}</div>
        </div>
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
