import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-md bg-gray-900/30 shadow-lg shadow-gray-900/10 py-2' 
        : 'backdrop-blur-sm bg-transparent py-3'
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-white">
              <span className="text-indigo-500">{"<"}</span>
              My Portfolio
              <span className="text-indigo-500">{"/"}</span>
              <span className="text-indigo-500">{">"}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  )
}