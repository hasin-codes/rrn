import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  isAdmin?: boolean;
}

export function ProfileCard({ 
  name, 
  role, 
  description, 
  image, 
  isAdmin = false 
}: ProfileCardProps) {
  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto">
      {/* Main profile card */}
      <div className="relative w-full h-full bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 rounded-2xl overflow-hidden shadow-2xl neumorphic-card">
        {/* Top Right Icons - Hidden on very small screens */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1 sm:gap-2 z-10">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white/60 rounded-sm"></div>
          </div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 sm:w-4 sm:h-4 flex flex-col justify-center items-center">
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/60 rounded-full mb-0.5 sm:mb-1"></div>
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/60 rounded-full mb-0.5 sm:mb-1"></div>
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/60 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 33vw"
          />
        </div>

        {/* Glassmorphism Blur Layer - Adjusted for mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] sm:h-[45%]">
          {/* Primary harsh background blur */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'transparent',
              backdropFilter: 'blur(20px) saturate(1.2)',
              maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            }}
          />
          
          {/* Secondary background blur for enhanced glass effect */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'transparent',
              backdropFilter: 'blur(12px)',
              maskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.7) 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.7) 50%, transparent 100%)',
            }}
          />
          
          {/* Subtle dark overlay for text contrast */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
              maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            }}
          />
        </div>

        {/* Bottom Content with Glass-Enhanced Shadows - Mobile optimized */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 z-10">
          <div className="space-y-2 sm:space-y-3">
            {/* Name with responsive text sizing */}
            <h3 
              className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight"
              style={{
                textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 1px 8px rgba(0,0,0,0.6), 0 0 25px rgba(0,0,0,0.4)'
              }}
            >
              {name}
            </h3>
            
            {/* Role and Follow Button - Mobile responsive */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-sm flex items-center justify-center shadow-lg flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-sm"></div>
                </div>
                <span 
                  className="text-white text-xs sm:text-sm md:text-base font-medium truncate"
                  style={{
                    textShadow: '0 1px 8px rgba(0,0,0,0.6), 0 0 12px rgba(0,0,0,0.4)'
                  }}
                >
                  {role}
                </span>
              </div>
              
              <button 
                className="text-white hover:text-white px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 hover:shadow-lg shadow-lg border border-white/40 flex-shrink-0"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(15px) saturate(1.5)',
                  textShadow: '0 1px 6px rgba(0,0,0,0.6)'
                }}
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}