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
                <span className="text-[#00827e] font-bold">Training</span>
              </div>
            </div>

            {/* Blog Heading */}
            <div className="text-center px-6">
              {/* Writer and Date */}
              <div className="mb-4">
                <p className="text-lg text-gray-600 mb-1">By Dr. Sarah Chen</p>
                <p className="text-sm text-gray-500">January 12, 2025</p>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
                The Science of Running Recovery
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
                  alt="The Science of Running Recovery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

             {/* Blog Content */}
             <div className="px-6 pb-8">
               <div className="max-w-4xl mx-auto">
                 <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 mb-6">
                    Recovery is not just about rest—it's a science. Understanding how your body repairs and adapts after running 
                    is crucial for long-term performance and injury prevention. Let's dive into the physiological processes that 
                    make recovery so important for runners.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">The Physiology of Recovery</h2>
                  <p className="text-gray-600 mb-4">
                    When you run, you create micro-tears in your muscle fibers, deplete energy stores, and accumulate metabolic waste. 
                    Recovery is the process by which your body repairs these damages and adapts to become stronger.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">The 24-Hour Recovery Cycle</h2>
                  <p className="text-gray-600 mb-4">
                    Recovery happens in phases. The first 0-4 hours post-run focus on restoring energy stores and reducing inflammation. 
                    Hours 4-24 involve protein synthesis and muscle repair. Understanding this timeline helps optimize your recovery strategy.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">Sleep: The Ultimate Recovery Tool</h2>
                  <p className="text-gray-600 mb-4">
                    During deep sleep, your body releases growth hormone, which is essential for muscle repair and adaptation. 
                    Aim for 7-9 hours of quality sleep, especially after intense training sessions.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">Nutrition for Recovery</h2>
                  <p className="text-gray-600 mb-4">
                    The 30-minute post-run window is crucial for recovery nutrition. Consuming a 3:1 or 4:1 ratio of carbohydrates to protein 
                    helps replenish glycogen stores and initiate muscle protein synthesis.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">Active vs. Passive Recovery</h2>
                  <p className="text-gray-600 mb-4">
                    Active recovery (light movement) can be more effective than complete rest for promoting blood flow and reducing muscle stiffness. 
                    However, passive recovery is essential after high-intensity sessions.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">Monitoring Recovery</h2>
                  <p className="text-gray-600 mb-4">
                    Track metrics like resting heart rate, sleep quality, and perceived exertion to gauge your recovery status. 
                    Technology like heart rate variability can provide additional insights into your body's readiness to train.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">Recovery Techniques</h2>
                  <p className="text-gray-600 mb-4">
                    Incorporate techniques like foam rolling, massage, compression therapy, and contrast showers to enhance recovery. 
                    These methods can improve circulation and reduce muscle tension.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">The Mental Aspect</h2>
                  <p className="text-gray-600 mb-4">
                    Recovery isn't just physical—it's mental too. Stress management, meditation, and relaxation techniques can significantly 
                    impact your body's ability to recover and adapt to training stress.
                  </p>

                  <p className="text-lg text-gray-600 mt-8">
                    Remember, recovery is where the magic happens. It's during rest that your body becomes stronger, faster, and more resilient. 
                    Prioritize recovery as much as you prioritize training, and you'll see better results with fewer injuries.
                  </p>
                </div>
              </div>
            </div>

            {/* Recommended Content */}
            <div className="px-6 pb-8">
              <div className="w-full">
                <h3 className="text-2xl font-bold text-black mb-6 text-left">Recommended Content</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/blog/10-essential-tips-beginner-runners" className="blog-card">
                    <div className="blog-card-content">
                      <div className="flex items-start justify-between mb-3">
                        <div className="inline-block px-2 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded text-sm">
                          <span className="text-[#00827e] font-bold">Tips</span>
                        </div>
                        <span className="text-sm text-gray-500">Jan 15, 2025</span>
                      </div>
                      <h4 className="text-lg font-bold text-black mb-2 line-clamp-2">10 Essential Tips for Beginner Runners</h4>
                      <p className="text-gray-600 mb-3 line-clamp-3 text-sm">Starting your running journey? Here are essential tips to help you get started safely and effectively.</p>
                      <span className="text-sm text-gray-500">By Coach Mike</span>
                    </div>
                    <div className="blog-card-image">
                      <img src="/ui/hero.png" alt="10 Essential Tips for Beginner Runners" />
                    </div>
                  </Link>

                  <Link href="/blog/building-mental-toughness-race-day" className="blog-card">
                    <div className="blog-card-content">
                      <div className="flex items-start justify-between mb-3">
                        <div className="inline-block px-2 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded text-sm">
                          <span className="text-[#00827e] font-bold">Training</span>
                        </div>
                        <span className="text-sm text-gray-500">Jan 3, 2025</span>
                      </div>
                      <h4 className="text-lg font-bold text-black mb-2 line-clamp-2">Building Mental Toughness for Race Day</h4>
                      <p className="text-gray-600 mb-3 line-clamp-3 text-sm">Running is as much mental as it is physical. Learn strategies to develop mental resilience.</p>
                      <span className="text-sm text-gray-500">By Sports Psychologist Dr. James</span>
                    </div>
                    <div className="blog-card-image">
                      <img src="/ui/hero.png" alt="Building Mental Toughness for Race Day" />
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
