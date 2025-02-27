"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-semibold">
            Portfolio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/resume" className="text-sm font-medium transition-colors hover:text-primary">
            Resume
          </Link>
          <Link to="/projects" className="text-sm font-medium transition-colors hover:text-primary">
            Projets
          </Link>
          <Link to="/articles" className="text-sm font-medium transition-colors hover:text-primary">
            Articles
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border/40 shadow-md">
          <nav className="container px-4 sm:px-6 lg:px-8 flex flex-col py-4">
            <Link
              to="/resume"
              className="py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              to="/projects"
              className="py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </Link>
            <Link
              to="/articles"
              className="py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

