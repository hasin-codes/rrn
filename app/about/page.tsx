
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <div className="w-full py-4 px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div 
            className="neumorphic-card overflow-hidden space-y-8 relative"
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
            <div className="flex justify-start px-4 pt-6">
              <div className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold text-sm sm:text-base">About Us</span>
              </div>
            </div>

            {/* Hero Section */}
            <div className="relative w-full h-[40vh] sm:h-[45vh] lg:h-[50vh] px-4 sm:px-6 md:px-8 lg:px-16">
              {/* Hero Image - Fixed dimensions */}
              <div className="absolute inset-0">
                <Image
                  src="/ui/hero.png"
                  alt="RunRise Nation - Running Community"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Hero Text Overlay Container - Bottom left with glassmorphism */}
              <div className="absolute inset-0 flex items-end justify-start">
                <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-3 sm:p-4 md:p-5 max-w-lg shadow-xl">
                    {/* Hero Tagline */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2 sm:mb-3 drop-shadow-lg">
                      Fueling passion, one stride at a time.
                    </h1>
                    
                    {/* Hero Supporting Text */}
                    <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed mb-3 sm:mb-4 drop-shadow-md">
                      Your journey to stronger runs and lasting friendships starts here — with accessible training, inspiring challenges, and a supportive community built for runners of every level.
                    </p>
                    
                    {/* Hero Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <button className="bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-bold transition-all duration-300 hover:shadow-lg text-xs sm:text-sm">
                        Join our community
                      </button>
                      <button className="border-2 border-white/60 text-white hover:bg-white/20 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-bold transition-all duration-300 text-xs sm:text-sm">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Story Section */}
            <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
              <div className="max-w-6xl mx-auto text-center">
                {/* Our Story Label */}
                <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm mb-6 sm:mb-8">
                  <span className="text-[#00827e] font-bold text-sm sm:text-base">Our Story</span>
                </div>
                
                {/* Our Story Text - Centered, 3 lines max */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight max-w-5xl mx-auto">
                  Our story is founded on the belief that running is more than a sport — it's a path to growth, connection, and resilience. This club was created to bridge the gap between individual goals and collective energy. Our journey began with a passion for running, a drive to make fitness fun, and a vision to unite people who chase progress, step by step.
                </h2>
              </div>
            </div>

            {/* Our Core Values Section */}
            <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
              <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 sm:mb-12 text-center">
                  Our Core Values
                </h2>
                
                {/* Values Components */}
                <div className="space-y-12 sm:space-y-16">
                  {/* Value 1: Integrity */}
                  <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                    <div className="flex-1 space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-px bg-[#00D8D2]"></div>
                          <span className="text-xs font-medium text-[#00D8D2] uppercase tracking-wider">Honesty First</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-black">Integrity</h3>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                        Our unwavering commitment to honesty and strong moral principles guides every action we take, ensuring transparency, trust, and ethical behavior in all our interactions and decisions.
                      </p>
                    </div>
                    <div className="flex-1">
                      <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden">
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
                  <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                    <div className="flex-1 space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-px bg-[#00D8D2]"></div>
                          <span className="text-xs font-medium text-[#00D8D2] uppercase tracking-wider">Inclusive Support</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-black">Community</h3>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                        We are dedicated to building a supportive and inclusive environment where everyone feels valued and respected, fostering a sense of belonging and mutual support that strengthens our collective well-being.
                  </p>
                </div>
                    <div className="flex-1">
                      <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden">
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
                  <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                    <div className="flex-1 space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-px bg-[#00D8D2]"></div>
                          <span className="text-xs font-medium text-[#00D8D2] uppercase tracking-wider">Continuous Improvement</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-black">Innovation</h3>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                        We strive to continuously enhance our offerings by embracing new ideas and cutting-edge technologies, driving progress and improvement to better serve our community's evolving needs and expectations.
                      </p>
                    </div>
                    <div className="flex-1">
                      <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden">
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

            {/* Team Section */}
            <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 pb-8 sm:pb-12 md:pb-16">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8">
                  Meet Our Expert Team
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  A passionate team of experienced runners, pacers, coaches, and community leaders committed to guiding, motivating, and supporting you throughout your running journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
