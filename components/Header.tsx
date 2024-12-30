'use client'

import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Yerkezhan Abdullayeva
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="#education" className="hover:text-blue-200">Education</Link>
          <Link href="#skills" className="hover:text-blue-200">Skills</Link>
          <Link href="#experience" className="hover:text-blue-200">Experience</Link>
          <Link href="#projects" className="hover:text-blue-200">Projects</Link>
          <Link href="#languages" className="hover:text-blue-200">Languages</Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <Link href="#education" className="block py-2 px-4 text-sm hover:bg-blue-700">Education</Link>
          <Link href="#skills" className="block py-2 px-4 text-sm hover:bg-blue-700">Skills</Link>
          <Link href="#experience" className="block py-2 px-4 text-sm hover:bg-blue-700">Experience</Link>
          <Link href="#projects" className="block py-2 px-4 text-sm hover:bg-blue-700">Projects</Link>
          <Link href="#languages" className="block py-2 px-4 text-sm hover:bg-blue-700">Languages</Link>
        </div>
      )}
    </header>
  )
}

export default Header

