"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Home, Users, Building, Info } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Quiénes Somos", href: "/about", icon: Info },
    { name: "Profesionales", href: "/professionals", icon: Users },
    { name: "Arriendo", href: "/rental", icon: Building },
  ]

  return (
    <header className="bg-gradient-to-r from-green-200 to-rose-200 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-rose-400 rounded-full flex items-center justify-center">
              <img
                      src={"/logo.jpeg"}
                      alt={"logo"}
                      className="w-full h-full md:h-full object-cover"
                    />
            </div>
            <span className="text-xl font-bold text-gray-800">Inter Terapias</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
