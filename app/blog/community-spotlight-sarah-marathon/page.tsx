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
                <span className="text-[#00827e] font-bold">Stories</span>
              </div>
            </div>

            {/* Blog Heading */}
            <div className="text-center px-6">
              {/* Writer and Date */}
              <div className="mb-4">
                <p className="text-lg text-gray-600 mb-1">By RunRise Team</p>
                <p className="text-sm text-gray-500">January 10, 2025</p>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
                Community Spotlight: Sarah's Marathon Journey
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
                  alt="Community Spotlight: Sarah's Marathon Journey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

             {/* Blog Content */}
             <div className="px-6 pb-8">
               <div className="max-w-4xl mx-auto">
                 <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 mb-6">
                    Meet Sarah Ahmed, a 28-year-old marketing professional who went from never running more than a mile to completing 
                    her first marathon in just 6 months. Her inspiring transformation showcases the power of community support, 
                    determination, and the right mindset.
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">The Beginning: A Couch Potato's Wake-Up Call</h2>
                  <p className="text-gray-600 mb-4">
                    "I was the classic couch potato," Sarah laughs. "I'd never run more than a mile in my life, and even that felt like torture. 
                    My wake-up call came when I couldn't climb three flights of stairs without getting winded. I knew something had to change."
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">Finding RunRise Nation</h2>
                  <p className="text-gray-600 mb-4">
                    Sarah discovered RunRise Nation through a friend who had been running with the group for a year. "I was intimidated at first," 
                    she admits. "Everyone seemed so fit and experienced. But the community was incredibly welcoming. They didn't care that I was 
                    starting from zero—they just wanted to help me succeed."
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">The First Month: Baby Steps</h2>
                  <p className="text-gray-600 mb-4">
                    Sarah's journey began with the beginner's program. "We started with 30 seconds of running, 90 seconds of walking," she recalls. 
                    "I thought I was going to die after the first session. But the coaches were amazing—they kept me motivated and helped me 
                    understand that progress, not perfection, was the goal."
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">Building Confidence and Community</h2>
                  <p className="text-gray-600 mb-4">
                    As Sarah's fitness improved, so did her confidence. "The group runs were game-changers," she says. "Running with others made 
                    the time fly by, and I made some incredible friends. We'd celebrate each other's milestones, no matter how small. When I ran 
                    my first 5K without stopping, the whole group cheered for me."
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">The Marathon Decision</h2>
                  <p className="text-gray-600 mb-4">
                    After 4 months of consistent training, Sarah felt ready for a bigger challenge. "I never thought I'd run a marathon," she says. 
                    "But my running buddies convinced me I could do it. They said, 'If you can run 10 miles, you can run 26.2.' I trusted them, 
                    and they were right."
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">Training for the Big Day</h2>
                  <p className="text-gray-600 mb-4">
                    Sarah followed a structured 16-week marathon training plan, with support from RunRise Nation's coaches. "The long runs were 
                    brutal," she admits. "But I never had to do them alone. Someone from the group was always there to run with me, even at 6 AM 
                    on weekends. That's the kind of support that gets you through the tough days."
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">Race Day: The Moment of Truth</h2>
                  <p className="text-gray-600 mb-4">
                    On marathon day, Sarah was nervous but ready. "I had my RunRise Nation family there to support me," she says. "They made signs, 
                    cheered at different points along the course, and even ran the last few miles with me. When I crossed the finish line in 4 hours 
                    and 23 minutes, I couldn't believe it. I was a marathoner!"
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">Life After the Marathon</h2>
                  <p className="text-gray-600 mb-4">
                    Six months after her first marathon, Sarah has completed two more races and is training for an ultramarathon. "Running has 
                    completely changed my life," she says. "I'm healthier, happier, and more confident. But the best part is the community I've 
                    found. These people aren't just my running buddies—they're my family."
                  </p>

                  <h2 className="text-2xl font-bold text-black mb-4 mt-8">Sarah's Advice for Beginners</h2>
                  <p className="text-gray-600 mb-4">
                    "Don't be afraid to start," Sarah says. "Everyone was a beginner once. Find a supportive community like RunRise Nation, 
                    trust the process, and celebrate every small victory. You're capable of more than you think—you just need to believe in 
                    yourself and surround yourself with people who believe in you too."
                  </p>

                  <p className="text-lg text-gray-600 mt-8">
                    Sarah's story is a testament to the transformative power of running and community. Her journey from couch to marathon 
                    in just 6 months shows that with the right support, mindset, and determination, anything is possible. 
                    She's now paying it forward by mentoring new runners in the RunRise Nation community.
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

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
