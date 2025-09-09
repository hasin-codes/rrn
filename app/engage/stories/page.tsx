
export default function StoriesPage() {
  return (
    <>
      <div className="w-full py-4 px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic-card overflow-hidden space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold">Showcase Your Stories</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Share Your Journey
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every runner has a unique story to tell. Share your running journey, 
                achievements, and experiences with the RunRise Nation community.
              </p>
            </div>

            {/* Story Submission Form */}
            <div className="max-w-2xl mx-auto">
              <div className="neumorphic-card p-8">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">Share Your Story</h2>
                <p className="text-gray-600 text-center">Story submission form will be implemented here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
