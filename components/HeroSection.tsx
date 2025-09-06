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
          <Card className="p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-center bg-white rounded-sm relative overflow-hidden">
            {/* Hero Text */}
            <div className="space-y-0 relative">
              <div className="relative">
                <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.9] tracking-tight">
                  Join Our
                </h1>
              </div>
              
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.9] tracking-tight">
                Running Family
              </h1>
              
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.9] tracking-tight">
                Beat Your Best
              </h1>

              {/* Runner Image - Positioned absolutely */}
              <div className="absolute -right-4 sm:-right-6 md:-right-8 top-1/2 -translate-y-1/2 w-24 h-32 sm:w-32 sm:h-40 md:w-40 md:h-52 z-10">
                <Image 
                  src="/ui/piyas.png" 
                  alt="Runner" 
                  width={160} 
                  height={208} 
                  className="w-full h-full object-contain"
                  priority
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px"
                />
              </div>
            </div>
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
          
          <div className="flex justify-center py-1 lg:py-2">
              <div className="relative w-24 h-32 lg:w-32 lg:h-40">
                <Image 
                  src="/ui/sneaker.png" 
                  alt="Running sneaker" 
                  width={128} 
                  height={160} 
                  className="w-full h-full object-contain"
                  priority
                  sizes="(max-width: 1024px) 96px, 128px"
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
            <Card className="p-8 lg:p-10 xl:p-12 shadow-sm h-full flex flex-col justify-center bg-white rounded-sm relative overflow-hidden">
              {/* Hero Text */}
              <div className="space-y-0 relative">
                <div className="relative">
                  <h1 className="hero-title text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black leading-[0.9] tracking-tight">
                    Join Our
                  </h1>
                </div>
                
                <h1 className="hero-title text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black leading-[0.9] tracking-tight">
                  Running Family
                </h1>
                
                <h1 className="hero-title text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black leading-[0.9] tracking-tight">
                  Beat Your Best
                </h1>

                {/* Runner Image - Positioned absolutely */}
                <div className="absolute -right-8 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 w-48 h-64 lg:w-56 lg:h-72 xl:w-64 xl:h-80 2xl:w-72 2xl:h-96 z-10">
                  <Image 
                    src="/ui/piyas.png" 
                    alt="Runner" 
                    width={288} 
                    height={384} 
                    className="w-full h-full object-contain"
                    priority
                    sizes="(max-width: 1024px) 192px, (max-width: 1280px) 224px, (max-width: 1536px) 256px, 288px"
                  />
                </div>
              </div>
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
            
            <div className="flex justify-center py-1 lg:py-2">
              <div className="relative w-24 h-32 lg:w-32 lg:h-40">
                <Image 
                  src="/ui/sneaker.png" 
                  alt="Running sneaker" 
                  width={128} 
                  height={160} 
                  className="w-full h-full object-contain"
                  priority
                  sizes="(max-width: 1024px) 96px, 128px"
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