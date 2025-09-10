import Image from 'next/image';
import ProfileGrids from '@/components/ProfileGrids';

export default function AboutPage() {
  return (
    <>
      <div className="w-full py-4 px-3 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto">
          <div 
            className="neumorphic-card overflow-hidden space-y-6 sm:space-y-8 relative"
            style={{
              backgroundImage: `
                radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
                repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
              `,
              backgroundSize: "8px 8px, 32px 32px, 32px 32px",
            }}
          >
            {/* About Us Label */}
            <div className="flex justify-start px-3 pt-4 sm:px-4 sm:pt-6">
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold text-sm sm:text-base">About Us</span>
              </div>
            </div>

            {/* Hero Section */}
            <div className="w-full px-3 sm:px-6 md:px-8 lg:px-16">
              {/* Mobile-First Layout */}
              <div className="relative w-full">
                {/* Hero Image */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/8] xl:aspect-[16/7] mb-4 sm:mb-0">
                  <Image
                    src="/ui/hero.png"
                    alt="RunRise Nation - Running Community"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                  
                  {/* Text Overlay - Hidden on mobile, shown on sm+ */}
                  <div className="hidden sm:flex absolute inset-0 items-end justify-start p-3 md:p-6 lg:p-8">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                      {/* Hero Tagline */}
                      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight mb-2 md:mb-3 drop-shadow-lg">
                        Fueling passion, one stride at a time.
                      </h1>
                      
                      {/* Hero Supporting Text */}
                      <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed mb-2 sm:mb-3 md:mb-4 drop-shadow-md">
                        Your journey to stronger runs and lasting friendships starts here — with accessible training, inspiring challenges, and a supportive community built for runners of every level.
                      </p>
                      
                      {/* Hero Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <button className="bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded font-bold transition-all duration-300 hover:shadow-lg text-xs sm:text-sm">
                          Join our community
                        </button>
                        <button className="border-2 border-white/60 text-white hover:bg-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded font-bold transition-all duration-300 text-xs sm:text-sm">
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Text Box - Shown only on mobile */}
                <div className="sm:hidden bg-teal-800 rounded-lg p-4 shadow-xl -mt-2">
                  {/* Hero Tagline */}
                  <h1 className="text-lg font-bold text-white leading-tight mb-2">
                    Fueling passion, one stride at a time.
                  </h1>
                  
                  {/* Hero Supporting Text */}
                  <p className="text-sm text-white/90 leading-relaxed mb-3">
                    Your journey to stronger runs and lasting friendships starts here — with accessible training, inspiring challenges, and a supportive community built for runners of every level.
                  </p>
                  
                  {/* Hero Buttons */}
                  <div className="flex gap-2">
                    <button className="bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30 px-3 py-2 rounded font-bold transition-all duration-300 hover:shadow-lg text-sm flex-1">
                      Join community
                    </button>
                    <button className="border-2 border-white/60 text-white hover:bg-white/20 px-3 py-2 rounded font-bold transition-all duration-300 text-sm flex-1">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Story Section */}
            <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-6 md:px-8 lg:px-16">
              <div className="max-w-6xl mx-auto text-center">
                {/* Our Story Label */}
                <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm mb-4 sm:mb-6 md:mb-8">
                  <span className="text-[#00827e] font-bold text-sm sm:text-base">Our Story</span>
                </div>
                
                {/* Our Story Text */}
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight max-w-5xl mx-auto">
                  Our story is founded on the belief that running is more than a sport — it's a path to growth, connection, and resilience. This club was created to bridge the gap between individual goals and collective energy. Our journey began with a passion for running, a drive to make fitness fun, and a vision to unite people who chase progress, step by step.
                </h2>
              </div>
            </div>

            {/* Our Core Values Section */}
            <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-6 md:px-8 lg:px-16">
              <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 md:mb-12 text-center">
                  Our Core Values
                </h2>
                
                {/* Values Components */}
                <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
                  {/* Value 1: Integrity */}
                  <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-12 xl:gap-16">
                    <div className="w-full lg:flex-1 space-y-3 sm:space-y-4 lg:space-y-6">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 sm:w-10 md:w-12 h-px bg-[#00D8D2]"></div>
                          <span className="text-xs font-medium text-[#00D8D2] uppercase tracking-wider">Honesty First</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">Integrity</h3>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
                        Our unwavering commitment to honesty and strong moral principles guides every action we take, ensuring transparency, trust, and ethical behavior in all our interactions and decisions.
                      </p>
                    </div>
                    <div className="w-full lg:flex-1">
                      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg sm:rounded-xl overflow-hidden">
                        <Image
                          src="/ui/hero.png"
                          alt="Integrity - Healthy food"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Value 2: Community */}
                  <div className="flex flex-col lg:flex-row-reverse items-start gap-4 sm:gap-6 lg:gap-12 xl:gap-16">
                    <div className="w-full lg:flex-1 space-y-3 sm:space-y-4 lg:space-y-6">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 sm:w-10 md:w-12 h-px bg-[#00D8D2]"></div>
                          <span className="text-xs font-medium text-[#00D8D2] uppercase tracking-wider">Inclusive Support</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">Community</h3>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
                        We are dedicated to building a supportive and inclusive environment where everyone feels valued and respected, fostering a sense of belonging and mutual support that strengthens our collective well-being.
                      </p>
                    </div>
                    <div className="w-full lg:flex-1">
                      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg sm:rounded-xl overflow-hidden">
                        <Image
                          src="/ui/hero.png"
                          alt="Community - Hands together"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Value 3: Innovation */}
                  <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-12 xl:gap-16">
                    <div className="w-full lg:flex-1 space-y-3 sm:space-y-4 lg:space-y-6">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 sm:w-10 md:w-12 h-px bg-[#00D8D2]"></div>
                          <span className="text-xs font-medium text-[#00D8D2] uppercase tracking-wider">Continuous Improvement</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">Innovation</h3>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
                        We strive to continuously enhance our offerings by embracing new ideas and cutting-edge technologies, driving progress and improvement to better serve our community's evolving needs and expectations.
                      </p>
                    </div>
                    <div className="w-full lg:flex-1">
                      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg sm:rounded-xl overflow-hidden">
                        <Image
                          src="/ui/hero.png"
                          alt="Innovation - Yoga pose"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section with Grids */}
            <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-6 md:px-8 lg:px-16 pb-6 sm:pb-8 md:pb-12 lg:pb-16">
              <div className="max-w-7xl mx-auto">
                <ProfileGrids />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}