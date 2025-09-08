"use client";

import Image from "next/image";
import { TextGif } from "@/components/ui/text-gif";

export function Footer() {
  return (
    <footer className="w-full bg-[#001c1f] rounded-t-[40px] px-4 sm:px-6 pt-12 pb-2 sm:pt-16 sm:pb-4">
      <div className="max-w-7xl mx-auto space-y-3 sm:space-y-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          
          {/* Left Side - CTA */}
          <div className="space-y-2 sm:space-y-4 lg:space-y-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Run with your people.
            </h2>
            
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              Join group runs, local meetups, and a coaching community that cares.
            </p>
            
            <button className="bg-gradient-to-r from-[#95fffa] to-[#82d7c4] px-6 sm:px-8 py-3 rounded-full text-black font-bold text-sm hover:shadow-lg transition-all duration-300">
              Become A Member
            </button>
          </div>

          {/* Right Side - Navigation & Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
            
            {/* Navigation */}
            <div className="space-y-3">
              <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-2">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="/" className="text-white hover:text-gray-300 transition-colors text-sm py-1">Home</a>
                <a href="/events" className="text-white hover:text-gray-300 transition-colors text-sm py-1">Events</a>
                <a href="/about" className="text-white hover:text-gray-300 transition-colors text-sm py-1">About</a>
                <a href="/blog" className="text-white hover:text-gray-300 transition-colors text-sm py-1">Blog</a>
                <a href="/profile" className="text-white hover:text-gray-300 transition-colors text-sm py-1">Profile</a>
                <a href="/engage/register" className="text-white hover:text-gray-300 transition-colors text-sm py-1">Register</a>
                <a href="/engage/faq" className="text-white hover:text-gray-300 transition-colors text-sm py-1">FAQ</a>
                <a href="/race/bib" className="text-white hover:text-gray-300 transition-colors text-sm py-1">Race BIB</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-4">
              <div>
                <h3 className="text-white font-bold mb-2">Location</h3>
                <p className="text-white text-xs leading-relaxed">
                  House No. 1, Road No. 6, Section - 12, Block E, Extended Rupnagar R/A, Pallabi, Mirpur, Dhaka-1216.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-2">Contact</h3>
                <p className="text-white text-xs break-all">info.runrisenation@gmail.com</p>
                <p className="text-white text-xs">+8801819903343</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-2 sm:gap-4">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl p-2 hover:bg-white/20 transition-all cursor-pointer">
            <Image src="/svgs/whatsapp.svg" alt="WhatsApp" width={32} height={32} className="w-full h-full" />
          </div>
          <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl p-2 hover:bg-white/20 transition-all cursor-pointer">
            <Image src="/svgs/instagram.svg" alt="Instagram" width={32} height={32} className="w-full h-full" />
          </div>
          <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl p-2 hover:bg-white/20 transition-all cursor-pointer">
            <Image src="/svgs/facebook.svg" alt="Facebook" width={32} height={32} className="w-full h-full" />
          </div>
          <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl p-2 hover:bg-white/20 transition-all cursor-pointer">
            <Image src="/svgs/youtube.svg" alt="YouTube" width={32} height={32} className="w-full h-full" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#00827E]" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 sm:gap-6">
          <p className="text-white text-sm">© 2025, RunRise Nation</p>
          
          <div className="flex items-center gap-3">
            <span className="text-white text-sm">Created By</span>
            <Image src="/ui/Ellipse 6.png" alt="Creator" width={32} height={32} className="w-8 h-8 rounded-full" />
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image 
                src="/ui/image 12.png" 
                alt="Creator logo" 
                width={64} 
                height={64} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Large Background Text */}
        <div className="relative h-32 sm:h-40 lg:h-48 rounded-b-3xl overflow-hidden">
          <Image 
            src="/ui/footer.png" 
            alt="Footer background" 
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-center px-4"
              style={{
                backgroundImage: 'url("https://media.giphy.com/media/3zvbrvbRe7wxBofOBI/giphy.gif")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                mixBlendMode: 'difference'
              }}
            >
              RunRise Nation
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}