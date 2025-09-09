import Link from 'next/link';
import { Facebook, Instagram, Twitter, Copy, ArrowLeft } from 'lucide-react';

export default function BlogDetailPage() {
  return (
    <>
      <div className="w-full py-4 px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div 
            className="neumorphic-card overflow-hidden space-y-8 relative"
            style={{
              backgroundColor: '#faf9f6',
              backgroundImage: `
                radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
                repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
              `,
              backgroundSize: "8px 8px, 32px 32px, 32px 32px",
            }}
          >
            {/* Back Button */}
            <div className="flex items-center space-x-4 pt-6 px-6">
              <Link href="/blog" className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm font-medium">Back to Blog</span>
              </Link>
            </div>

            {/* Category Tab */}
            <div className="px-6">
              <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold">Tips</span>
              </div>
            </div>

            {/* Blog Heading */}
            <div className="text-center px-6">
              {/* Writer and Date */}
              <div className="mb-4">
                <p className="text-lg text-gray-600 mb-1">By Coach Mike</p>
                <p className="text-sm text-gray-500">January 15, 2025</p>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
                10 Essential Tips for Beginner Runners
              </h1>
              
              {/* Social Media Links */}
              <div className="flex items-center justify-center space-x-6 mb-8">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#00D8D2] transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#00D8D2] transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#00D8D2] transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#00D8D2] transition-colors">
                  <Copy className="h-5 w-5" />
                  <span className="text-sm font-medium">Copy Link</span>
                </button>
              </div>
            </div>

            {/* Blog Thumbnail */}
            <div className="px-6">
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <img 
                  src="/ui/hero.png" 
                  alt="10 Essential Tips for Beginner Runners"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

             {/* Blog Content */}
             <div className="px-6 pb-8">
               <div className="max-w-4xl mx-auto">
                 <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 mb-6">
                    Starting your running journey can be both exciting and overwhelming. Whether you're looking to improve your fitness, 
                    lose weight, or simply enjoy the outdoors, these essential tips will help you get started safely and effectively.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">1. Start Slow and Build Gradually</h2>
                  <p className="text-gray-600 mb-4">
                    One of the biggest mistakes beginners make is doing too much too soon. Start with a combination of walking and running, 
                    gradually increasing your running time. A good rule of thumb is the 10% rule: don't increase your weekly mileage by more than 10%.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">2. Invest in Proper Running Shoes</h2>
                  <p className="text-gray-600 mb-4">
                    Your feet are your foundation. Visit a specialty running store to get fitted for shoes that match your foot type and running style. 
                    Proper shoes can prevent injuries and make your runs more comfortable.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">3. Focus on Form, Not Speed</h2>
                  <p className="text-gray-600 mb-4">
                    Good running form is more important than speed, especially when starting out. Keep your posture upright, land on your midfoot, 
                    and maintain a comfortable cadence of about 180 steps per minute.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">4. Listen to Your Body</h2>
                  <p className="text-gray-600 mb-4">
                    Pay attention to how your body feels during and after runs. Some muscle soreness is normal, but sharp pain or persistent discomfort 
                    should not be ignored. Rest when needed and don't push through pain.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">5. Stay Hydrated</h2>
                  <p className="text-gray-600 mb-4">
                    Proper hydration is crucial for performance and recovery. Drink water throughout the day, not just during your runs. 
                    For runs longer than 60 minutes, consider carrying water or planning a route with water stops.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">6. Warm Up and Cool Down</h2>
                  <p className="text-gray-600 mb-4">
                    Always start with a 5-10 minute warm-up walk or light jog, and end with a cool-down walk and stretching. 
                    This helps prepare your muscles for exercise and aids in recovery.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">7. Set Realistic Goals</h2>
                  <p className="text-gray-600 mb-4">
                    Set achievable short-term and long-term goals. Whether it's running for 20 minutes without stopping or completing your first 5K, 
                    having clear objectives will keep you motivated and on track.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">8. Find a Running Buddy or Group</h2>
                  <p className="text-gray-600 mb-4">
                    Running with others can provide motivation, accountability, and make the experience more enjoyable. 
                    Consider joining a local running group or finding a friend with similar fitness goals.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">9. Track Your Progress</h2>
                  <p className="text-gray-600 mb-4">
                    Keep a running log to track your distance, time, and how you felt during each run. This will help you see improvements over time 
                    and identify patterns in your training.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">10. Be Patient and Consistent</h2>
                  <p className="text-gray-600 mb-4">
                    Progress takes time. Don't get discouraged if you don't see immediate results. Consistency is key - even short, regular runs 
                    are better than sporadic long runs. Trust the process and celebrate small victories along the way.
                  </p>

                  <p className="text-lg text-gray-600 mt-8">
                    Remember, every runner started as a beginner. The most important thing is to enjoy the journey and listen to your body. 
                    With patience, consistency, and these essential tips, you'll be well on your way to becoming a confident runner.
                  </p>
                </div>
              </div>
            </div>

            {/* Recommended Content */}
            <div className="px-6 pb-8">
              <div className="w-full">
                <h3 className="text-2xl font-bold text-black mb-6 text-left">Recommended Content</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/blog/science-running-recovery" className="blog-card">
                    <div className="blog-card-content">
                      <div className="flex items-start justify-between mb-3">
                        <div className="inline-block px-2 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded text-sm">
                          <span className="text-[#00827e] font-bold">Training</span>
                        </div>
                        <span className="text-sm text-gray-500">Jan 12, 2025</span>
                      </div>
                      <h4 className="text-lg font-bold text-black mb-2 line-clamp-2">The Science of Running Recovery</h4>
                      <p className="text-gray-600 mb-3 line-clamp-3 text-sm">Understanding the importance of rest and recovery in your running training program.</p>
                      <span className="text-sm text-gray-500">By Dr. Sarah Chen</span>
                    </div>
                    <div className="blog-card-image">
                      <img src="/ui/hero.png" alt="The Science of Running Recovery" />
                    </div>
                  </Link>

                  <Link href="/blog/community-spotlight-sarah-marathon" className="blog-card">
                    <div className="blog-card-content">
                      <div className="flex items-start justify-between mb-3">
                        <div className="inline-block px-2 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded text-sm">
                          <span className="text-[#00827e] font-bold">Stories</span>
                        </div>
                        <span className="text-sm text-gray-500">Jan 10, 2025</span>
                      </div>
                      <h4 className="text-lg font-bold text-black mb-2 line-clamp-2">Community Spotlight: Sarah's Marathon Journey</h4>
                      <p className="text-gray-600 mb-3 line-clamp-3 text-sm">Read about how Sarah went from couch to marathon in just 6 months.</p>
                      <span className="text-sm text-gray-500">By RunRise Team</span>
                    </div>
                    <div className="blog-card-image">
                      <img src="/ui/hero.png" alt="Community Spotlight: Sarah's Marathon Journey" />
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
