import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  isAdmin?: boolean;
}

export default function ProfileCard({ 
  name, 
  role, 
  description, 
  image, 
  isAdmin = false 
}: ProfileCardProps) {
  return (
    <div className="relative w-full aspect-square bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 rounded-2xl overflow-hidden shadow-2xl min-h-[400px] max-w-[400px] mx-auto">
      {/* Top Right Icons */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white/60 rounded-sm"></div>
        </div>
        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 flex flex-col justify-center items-center">
            <div className="w-1 h-1 bg-white/60 rounded-full mb-1"></div>
            <div className="w-1 h-1 bg-white/60 rounded-full mb-1"></div>
            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
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
        />
      </div>

       {/* Glassmorphism Blur Layer - Pure Background Blur */}
       <div className="absolute bottom-0 left-0 right-0 h-[45%]">
         {/* Primary harsh background blur */}
         <div 
           className="absolute inset-0"
           style={{
             background: 'transparent',
             backdropFilter: 'blur(25px)',
             maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
           }}
         />
         
         {/* Secondary background blur for enhanced glass effect */}
         <div 
           className="absolute inset-0"
           style={{
             background: 'transparent',
             backdropFilter: 'blur(15px)',
             maskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.7) 50%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.7) 50%, transparent 100%)',
           }}
         />
         
         {/* Third background blur layer */}
         <div 
           className="absolute inset-0"
           style={{
             background: 'transparent',
             backdropFilter: 'blur(10px)',
             maskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.5) 70%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.5) 70%, transparent 100%)',
           }}
         />
         
         {/* Subtle dark overlay for text contrast */}
         <div 
           className="absolute inset-0"
           style={{
             background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
             maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
           }}
         />
       </div>

      {/* Bottom Content with Glass-Enhanced Shadows */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="space-y-3">
          {/* Name with glassmorphism shadows */}
          <h3 
            className="text-3xl font-bold text-white"
            style={{
              textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 1px 8px rgba(0,0,0,0.6), 0 0 25px rgba(0,0,0,0.4)'
            }}
          >
            {name}
          </h3>
          
          {/* Role and Follow Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-sm flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 bg-yellow-600 rounded-sm"></div>
              </div>
              <span 
                className="text-white text-base font-medium"
                style={{
                  textShadow: '0 1px 8px rgba(0,0,0,0.6), 0 0 12px rgba(0,0,0,0.4)'
                }}
              >
                {role}
              </span>
            </div>
            
            <button 
              className="text-white hover:text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-300 hover:shadow-lg shadow-lg border border-white/40"
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
  );
}