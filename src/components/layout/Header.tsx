'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useFormContext } from '@/components/ui/form-context'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openForm } = useFormContext()
  
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              JordanBuildsBrands
            </Link>
            
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#results" className="text-gray-300 hover:text-white transition-colors">
                Results
              </Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                Testimonials
              </Link>
            </nav>
          </div>
          
          <div className="hidden md:block">
            <Button 
              onClick={openForm}
              className="bg-red-500 hover:bg-red-600 text-white px-6"
            >
              Apply Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#results" className="text-gray-300 hover:text-white transition-colors">
                Results
              </Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                Testimonials
              </Link>
              <Button 
                onClick={() => {
                  openForm();
                  setIsMenuOpen(false);
                }}
                className="bg-red-500 hover:bg-red-600 text-white w-full"
              >
                Apply Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
