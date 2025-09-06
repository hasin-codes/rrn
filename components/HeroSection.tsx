import Image from "next/image";
import { CountUp } from "@/components/ui/count-up";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <div className="w-full bg-[#dcdeea] py-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout: Left Card -> Events -> Right Card */}
        <div className="flex flex-col lg:hidden space-y-4">
          {/* Left Card - Main Hero Content */}
          <Card className="p-4 lg:p-6 shadow-sm flex flex-col justify-center bg-white rounded-sm">
            {/* Hero Text */}
            <div className="space-y-1 lg:space-y-2 mb-4 lg:mb-6 ">
              <div className="relative">
                <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-[1.1]">
                  Join Our
                </h1>
                <div className="absolute -right-2 sm:right-2 lg:right-4 xl:right-6 -top-2 sm:-top-1 lg:top-0 xl:top-2 w-12 h-16 sm:w-16 sm:h-20 lg:w-20 lg:h-24 xl:w-24 xl:h-28 opacity-90 z-10">
                  <Image 
                    src="/ui/piyas.png" 
                    alt="Piyas" 
                    width={96} 
                    height={112} 
                    className="w-full h-full object-contain"
                    priority
                    sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, (max-width: 1280px) 80px, 96px"
                  />
                </div>
              </div>
              
              <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-[1.1]">
                Running Family
              </h1>
              
              <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-[1.1]">
                Beat Your Best
              </h1>
            </div>

            {/* CTA Button */}
            <button className="group bg-gradient-to-r from-[#00ead3] to-[#00d4c0] hover:from-[#00d4c0] hover:to-[#00ead3] px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 lg:gap-3 w-full sm:w-auto">
              <span className="text-black font-bold text-base lg:text-lg">Join our community</span>
              <div className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1">
                <Image src="/svgs/arrow-right.svg" alt="" width={20} height={20} className="w-full h-full" />
              </div>
            </button>
          </Card>

          {/* Events Section - Mobile */}
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
                <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black">Events 2025</h3>
              </div>
            </div>

            {/* Main Image with proper padding */}
            <div className="px-6 pb-2">
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/ui/hero.png" 
                  alt="Events hero" 
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
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

          {/* Right Card - Community Stats */}
          <Card className="p-4 lg:p-6 shadow-sm text-center space-y-3 lg:space-y-4 flex flex-col justify-center bg-white rounded-sm">
          <div className="space-y-1">
              <h2 className="hero-stats text-2xl lg:text-3xl font-bold text-black">
                <CountUp from={0} to={203} duration={2} className="count-up-text" />
                <span>+</span>
              </h2>
            <p className="text-sm lg:text-base text-black leading-tight">Active Community Members & Counting</p>
          </div>
          
          <div className="flex justify-center py-2 lg:py-3">
              <div className="w-16 h-20 lg:w-20 lg:h-24">
                <Image 
                  src="/ui/sneaker.png" 
                  alt="Running sneaker" 
                  width={80} 
                  height={96} 
                  className="w-full h-full object-cover"
                  priority
                  sizes="(max-width: 1024px) 64px, 80px"
                />
              </div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-[#00ead3] to-[#00d4c0] hover:from-[#00d4c0] hover:to-[#00ead3] px-3 lg:px-4 py-2 rounded-full text-black font-bold text-sm lg:text-base transition-all duration-300 hover:shadow-lg">
            Join our community
          </button>
          </Card>
        </div>

        {/* Desktop Layout: Left Card + Right Card Side by Side */}
        <div className="hidden lg:grid grid-cols-3 gap-4 lg:gap-6 items-stretch hero-content">
          {/* Main Hero Content */}
          <div className="lg:col-span-2 space-y-4 lg:space-y-0">
            <Card className="p-4 lg:p-6 shadow-sm h-full flex flex-col justify-center bg-white rounded-sm">
              {/* Hero Text */}
              <div className="space-y-1 lg:space-y-2 mb-4 lg:mb-6 ">
                <div className="relative">
                  <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-[1.1]">
                    Join Our
                  </h1>
                  <div className="absolute -right-2 sm:right-2 lg:right-4 xl:right-6 -top-2 sm:-top-1 lg:top-0 xl:top-2 w-12 h-16 sm:w-16 sm:h-20 lg:w-20 lg:h-24 xl:w-24 xl:h-28 opacity-90 z-10">
                    <Image 
                      src="/ui/piyas.png" 
                      alt="Piyas" 
                      width={96} 
                      height={112} 
                      className="w-full h-full object-contain"
                      priority
                      sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, (max-width: 1280px) 80px, 96px"
                    />
                  </div>
                </div>
                
                <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-[1.1]">
                  Running Family
                </h1>
                
                <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-[1.1]">
                  Beat Your Best
                </h1>
              </div>

              {/* CTA Button */}
              <button className="group bg-gradient-to-r from-[#00ead3] to-[#00d4c0] hover:from-[#00d4c0] hover:to-[#00ead3] px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 lg:gap-3 w-full sm:w-auto">
                <span className="text-black font-bold text-base lg:text-lg">Join our community</span>
                <div className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1">
                  <Image src="/svgs/arrow-right.svg" alt="" width={20} height={20} className="w-full h-full" />
                </div>
              </button>
            </Card>
          </div>

          {/* Community Stats */}
          <Card className="p-4 lg:p-6 shadow-sm text-center space-y-3 lg:space-y-4 h-full flex flex-col justify-center bg-white rounded-sm">
            <div className="space-y-1">
              <h2 className="hero-stats text-2xl lg:text-3xl font-bold text-black">
                <CountUp from={0} to={203} duration={2} className="count-up-text" />
                <span>+</span>
              </h2>
              <p className="text-sm lg:text-base text-black leading-tight">Active Community Members & Counting</p>
            </div>
            
            <div className="flex justify-center py-2 lg:py-3">
              <div className="w-16 h-20 lg:w-20 lg:h-24">
                <Image 
                  src="/ui/sneaker.png" 
                  alt="Running sneaker" 
                  width={80} 
                  height={96} 
                  className="w-full h-full object-cover"
                  priority
                  sizes="(max-width: 1024px) 64px, 80px"
                />
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-[#00ead3] to-[#00d4c0] hover:from-[#00d4c0] hover:to-[#00ead3] px-3 lg:px-4 py-2 rounded-full text-black font-bold text-sm lg:text-base transition-all duration-300 hover:shadow-lg">
              Join our community
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}