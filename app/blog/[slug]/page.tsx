'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X, Instagram, Facebook, Twitter, Copy, Clock, ArrowUpRight } from 'lucide-react';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll detection for back to top button
  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button when user scrolls past the thumbnail and title section
      const scrollPosition = window.scrollY;
      const triggerPoint = 600; // Adjust this value based on when thumbnail/title section ends
      setShowBackToTop(scrollPosition > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reading time calculation (average 200 words per minute)
  const blogContent = `
# 10 Essential Tips for Beginner Runners

Starting your running journey can be both exciting and overwhelming. Whether you're looking to improve your fitness, lose weight, or simply enjoy the outdoors, running is one of the most accessible and effective forms of exercise. However, many beginners make common mistakes that can lead to injury or burnout. Here are 10 essential tips to help you start your running journey safely and effectively.

## 1. Start with a Proper Warm-up

Before you even think about running, it's crucial to prepare your body. A proper warm-up increases your heart rate, loosens your muscles, and prepares your joints for the impact of running. Spend 5-10 minutes doing dynamic stretches like leg swings, arm circles, and light jogging in place.

## 2. Invest in the Right Running Shoes

Your feet are your foundation, and the right shoes can make or break your running experience. Visit a specialty running store where experts can analyze your gait and recommend shoes that provide proper support and cushioning. Don't skimp on this investment – it's worth every penny.

## 3. Follow the 10% Rule

One of the most common mistakes beginners make is doing too much too soon. The 10% rule states that you should never increase your weekly mileage by more than 10% from the previous week. This gradual progression helps prevent overuse injuries and allows your body to adapt.

## 4. Listen to Your Body

Pain is your body's way of telling you something is wrong. While some muscle soreness is normal, sharp or persistent pain should not be ignored. If you experience pain that doesn't improve with rest, consult a healthcare professional.

## 5. Focus on Form, Not Speed

As a beginner, your primary goal should be building endurance and establishing good running form. Keep your posture upright, land on your midfoot, and maintain a comfortable cadence. Speed will come naturally as your fitness improves.

## 6. Stay Hydrated

Proper hydration is essential for performance and recovery. Drink water throughout the day, not just during your runs. A good rule of thumb is to drink half your body weight in ounces of water daily.

## 7. Don't Skip Rest Days

Rest is when your body repairs and strengthens itself. Aim for at least one rest day between running sessions, especially when starting out. This doesn't mean you have to be completely inactive – light activities like walking or yoga are perfectly fine.

## 8. Track Your Progress

Keeping a running log helps you stay motivated and track your improvement. Note your distance, time, how you felt, and any observations. This data will help you identify patterns and celebrate your progress.

## 9. Join a Running Community

Running with others can provide motivation, accountability, and valuable advice. Look for local running groups, join online communities, or find a running buddy. The support and camaraderie can make your running journey much more enjoyable.

## 10. Be Patient and Consistent

Progress in running takes time. Don't expect to see dramatic improvements overnight. Focus on consistency rather than perfection. Even short, easy runs contribute to your overall fitness and running ability.

## Conclusion

Starting your running journey is an investment in your health and well-being. By following these essential tips, you'll set yourself up for success and avoid common pitfalls that many beginners encounter. Remember, every expert runner was once a beginner. Stay patient, stay consistent, and most importantly, enjoy the journey.

The road ahead may seem long, but every step you take brings you closer to your goals. Welcome to the wonderful world of running!
  `;

  const wordCount = blogContent.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // 200 words per minute

  const recommendedPosts = [
    {
      title: "The Science of Running Recovery",
      excerpt: "Understanding the importance of rest and recovery in your running training program.",
      date: "January 12, 2025",
      category: "Training",
      readTime: "7 min read",
      author: "Dr. Sarah Chen",
      slug: "science-running-recovery"
    },
    {
      title: "Community Spotlight: Sarah's Marathon Journey",
      excerpt: "Read about how Sarah went from couch to marathon in just 6 months with RunRise Nation.",
      date: "January 10, 2025",
      category: "Stories",
      readTime: "8 min read",
      author: "RunRise Team",
      slug: "community-spotlight-sarah-marathon"
    },
    {
      title: "Nutrition Guide for Long Distance Running",
      excerpt: "Fuel your runs with the right nutrition strategy for optimal performance.",
      date: "January 8, 2025",
      category: "Nutrition",
      readTime: "6 min read",
      author: "Nutritionist Lisa",
      slug: "nutrition-guide-long-distance-running"
    }
  ];

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
          title="Back to top"
        >
          <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 group-hover:text-gray-900 transition-colors rotate-45" />
        </button>
      )}

      <div className="w-full py-4 px-4 pt-16 sm:pt-20">
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

            {/* Blog Category Box */}
            <div className="flex justify-start px-4">
              <div className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold text-sm sm:text-base">Blog</span>
              </div>
            </div>

            {/* Writer Info and Title Container */}
            <div className="text-center space-y-4 px-4 relative">
              {/* Circular Close Button - Centered above Coach Mike's name */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                <Link 
                  href="/blog" 
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700 group-hover:text-gray-900 transition-colors" />
                </Link>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">Coach Mike</h2>
                <p className="text-xs sm:text-sm text-gray-500">January 15, 2025</p>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-black leading-tight max-w-4xl mx-auto px-2">
                10 Essential Tips for Beginner Runners
              </h1>
            </div>

            {/* Social Media Sharing Container */}
            <div className="flex justify-center px-4">
              <div className="flex items-center gap-2 sm:gap-4 bg-white/50 backdrop-blur-sm rounded-lg px-3 sm:px-6 py-2 sm:py-3 border border-gray-200">
                <button className="flex items-center gap-1 sm:gap-2 text-pink-600 hover:text-pink-700 transition-colors">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-medium hidden sm:inline">Share</span>
                </button>
                <button className="flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-medium hidden sm:inline">Share</span>
                </button>
                <button className="flex items-center gap-1 sm:gap-2 text-blue-400 hover:text-blue-500 transition-colors">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-medium hidden sm:inline">Tweet</span>
                </button>
                <button className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-gray-700 transition-colors">
                  <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-medium hidden sm:inline">Copy Link</span>
                </button>
              </div>
            </div>

            {/* Blog Thumbnail Container */}
            <div className="px-4 sm:px-6 md:px-8">
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/ui/hero.png"
                  alt="10 Essential Tips for Beginner Runners"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Blog Content Container */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-16">
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                <div className="flex items-center gap-2 mb-4 sm:mb-6 text-gray-600">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">{readingTime} min read</span>
                </div>
                
                <div 
                  className="text-gray-800 leading-relaxed text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ 
                    __html: blogContent
                      .replace(/^# (.*$)/gim, '<h1 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-black">$1</h1>')
                      .replace(/^## (.*$)/gim, '<h2 class="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-8 text-black">$1</h2>')
                      .replace(/^### (.*$)/gim, '<h3 class="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 mt-4 sm:mt-6 text-black">$1</h3>')
                      .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')
                      .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
                      .replace(/^\- (.*$)/gim, '<li class="ml-2 sm:ml-4 mb-1 sm:mb-2">$1</li>')
                      .replace(/\n\n/gim, '</p><p class="mb-3 sm:mb-4">')
                      .replace(/^(?!<[h|l])/gim, '<p class="mb-3 sm:mb-4">')
                      .replace(/(<li.*<\/li>)/gim, '<ul class="list-disc ml-4 sm:ml-6 mb-3 sm:mb-4">$1</ul>')
                  }}
                />
              </div>
            </div>

            {/* Recommended Content Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-16">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4 sm:mb-6">Recommended Content</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {recommendedPosts.map((post, index) => (
                  <Link key={index} href={`/blog/${post.slug}`} className="blog-card group">
                    <div className="blog-card-content">
                      <div className="flex items-start justify-between mb-3">
                        <div className="inline-block px-2 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded text-sm">
                          <span className="text-[#00827e] font-bold">{post.category}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-gray-500 block">{post.date}</span>
                          <span className="text-xs text-gray-400">{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-black mb-2 line-clamp-2 group-hover:text-[#00827e] transition-colors">{post.title}</h4>
                      <p className="text-gray-600 mb-3 line-clamp-3 text-sm">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">By {post.author}</span>
                        <span className="text-[#00827e] hover:text-[#00D8D2] font-semibold text-sm transition-colors duration-300">
                          Read more
                        </span>
                      </div>
                    </div>
                    
                    <div className="blog-card-image">
                      <img 
                        src="/ui/hero.png" 
                        alt={post.title}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
