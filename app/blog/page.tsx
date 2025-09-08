import FlowingMenu from '@/components/FlowingMenu'

export default function BlogPage() {
  const demoItems = [
    { 
      link: '#', 
      text: 'Latest Running Tips & Stories', 
      image: '/ui/MEDAL.png' 
    },
  ];

  const blogPosts = [
    {
      title: "10 Essential Tips for Beginner Runners",
      excerpt: "Starting your running journey? Here are essential tips to help you get started safely and effectively. Learn about proper form, pacing, and building endurance.",
      date: "January 15, 2025",
      category: "Tips",
      readTime: "5 min read",
      author: "Coach Mike"
    },
    {
      title: "The Science of Running Recovery",
      excerpt: "Understanding the importance of rest and recovery in your running training program. Discover how proper recovery can improve your performance and prevent injuries.",
      date: "January 12, 2025",
      category: "Training",
      readTime: "7 min read",
      author: "Dr. Sarah Chen"
    },
    {
      title: "Community Spotlight: Sarah's Marathon Journey",
      excerpt: "Read about how Sarah went from couch to marathon in just 6 months with RunRise Nation. Her inspiring transformation and the community support that made it possible.",
      date: "January 10, 2025",
      category: "Stories",
      readTime: "8 min read",
      author: "RunRise Team"
    },
    {
      title: "Nutrition Guide for Long Distance Running",
      excerpt: "Fuel your runs with the right nutrition strategy for optimal performance. Learn about pre-run meals, hydration, and recovery nutrition.",
      date: "January 8, 2025",
      category: "Nutrition",
      readTime: "6 min read",
      author: "Nutritionist Lisa"
    },
    {
      title: "Winter Running: Staying Motivated in Cold Weather",
      excerpt: "Don't let winter stop your running progress. Tips for staying warm, safe, and motivated during the colder months.",
      date: "January 5, 2025",
      category: "Tips",
      readTime: "4 min read",
      author: "Coach Alex"
    },
    {
      title: "Building Mental Toughness for Race Day",
      excerpt: "Running is as much mental as it is physical. Learn strategies to develop mental resilience and overcome race day anxiety.",
      date: "January 3, 2025",
      category: "Training",
      readTime: "9 min read",
      author: "Sports Psychologist Dr. James"
    },
    {
      title: "RunRise Nation 2024 Year in Review",
      excerpt: "Celebrating our community's achievements, memorable events, and the incredible growth we've experienced together this year.",
      date: "December 30, 2024",
      category: "Community",
      readTime: "10 min read",
      author: "RunRise Team"
    },
    {
      title: "Injury Prevention: Common Running Injuries and How to Avoid Them",
      excerpt: "Learn about the most common running injuries, their causes, and effective prevention strategies to keep you running strong.",
      date: "December 28, 2024",
      category: "Health",
      readTime: "6 min read",
      author: "Physiotherapist Emma"
    }
  ];

  return (
    <>
      {/* FlowingMenu at the top of the page - positioned below navbar */}
      <div className="w-full pt-[120px]" style={{ height: '80px' }}>
        <FlowingMenu items={demoItems} />
      </div>
      
      <div className="w-full py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic-card overflow-hidden space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold">Blog</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Running Blog
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest running tips, training advice, community stories, 
                and insights from the RunRise Nation community.
              </p>
            </div>

            {/* Blog Posts */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <div key={index} className="neumorphic-card p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-block px-3 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded text-sm">
                        <span className="text-[#00827e] font-bold">{post.category}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500 block">{post.date}</span>
                        <span className="text-xs text-gray-400">{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-black mb-3 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <button className="bg-gradient-to-r from-[#00ead3] to-[#00d4c0] hover:from-[#00d4c0] hover:to-[#00ead3] px-4 py-2 rounded-full text-black font-bold text-sm transition-all duration-300 hover:shadow-lg">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
