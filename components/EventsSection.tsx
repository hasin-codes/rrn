import React from 'react';
import Image from 'next/image';

export default function EventsSection() {
  return (
    <section className="w-full py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          
          {/* Header */}
          <div className="grid grid-cols-3 py-3 px-6">
            <div className="text-left">
              <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black">Training</h3>
            </div>
            <div className="text-center">
              <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black">Community Run</h3>
            </div>
            <div className="text-right">
              <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black">Running events 2025</h3>
            </div>
          </div>

          {/* Main Image with proper padding */}
          <div className="px-6 pb-2">
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/ui/hero.png" 
                alt="Events hero" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="grid grid-cols-2 py-3 px-6">
            <div className="text-left">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black">View Pacers</h3>
            </div>
            <div className="text-right">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black">Team</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}