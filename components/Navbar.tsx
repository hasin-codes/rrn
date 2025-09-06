"use client";

import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#002221] rounded-md px-4 sm:px-6 py-2 lg:py-2.5">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="w-8 h-8 lg:w-10 lg:h-10 mix-blend-screen">
            <Image 
              src="/assets/00d2aa78cfca598613cb752ccaa8166fac6bfe23.png" 
              alt="Logo" 
              width={40} 
              height={40} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Separator Line - Hidden on very small screens */}
          <div className="hidden sm:block h-8 w-px bg-[#D1D1D1] opacity-60" />
          
          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-base lg:text-lg">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-base lg:text-lg">
              Events
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-base lg:text-lg">
              Blog
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-base lg:text-lg">
              Engage
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-base lg:text-lg">
              Race Kit
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Login/Register Button */}
          <button
            className="hidden sm:block px-3 lg:px-4 py-1.5 lg:py-2 bg-gradient-to-r from-[rgba(196,196,196,0.1)] to-[rgba(196,196,196,0.05)] backdrop-blur-sm border border-[#00D8D2] rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <Image 
              src="/assets/e61f19b4a612d9312b1337827caedb3725705b47.png" 
              alt="" 
              fill
              className="object-cover -z-10"
            />
            <span className="text-black font-medium text-sm">Login/Register</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 py-4 border-t border-gray-700">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-lg py-2">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-lg py-2">
              Events
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-lg py-2">
              Blog
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-lg py-2">
              Engage
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-lg py-2">
              Race Kit
            </a>
            <button className="sm:hidden mt-4 px-6 py-2 bg-gradient-to-r from-[rgba(196,196,196,0.1)] to-[rgba(196,196,196,0.05)] backdrop-blur-sm border border-[#00D8D2] rounded-sm shadow-lg text-black font-medium text-sm">
              Login/Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}