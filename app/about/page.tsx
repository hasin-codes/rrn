
export default function AboutPage() {
  return (
    <>
      <div className="w-full py-4 px-4 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic-card overflow-hidden space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold">About Us</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                About RunRise Nation
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are a passionate running community dedicated to fostering a culture of fitness, 
                endurance, and camaraderie. Join us in our mission to help every runner reach their potential.
              </p>
            </div>

            {/* About Content */}
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="neumorphic-card p-8">
                <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  RunRise Nation is committed to creating an inclusive running community where every individual, 
                  regardless of their skill level, can find support, motivation, and the resources they need to 
                  achieve their running goals. We believe that running is more than just a physical activity – 
                  it's a journey of personal growth, community building, and pushing beyond perceived limits.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Since our founding in 2020, we've grown from a small group of passionate runners to a thriving 
                  community of over 200+ active members. Our mission extends beyond organizing events – we're 
                  building a movement that transforms lives through the power of running.
                </p>
              </div>

              <div className="neumorphic-card p-8">
                <h2 className="text-3xl font-bold text-black mb-6">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">Community First</h3>
                    <p className="text-gray-600">We prioritize building strong, supportive relationships within our running community. Every member matters, and every achievement is celebrated.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">Inclusive Excellence</h3>
                    <p className="text-gray-600">We celebrate achievements at every level and welcome runners of all backgrounds, ages, and abilities. Excellence comes in many forms.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">Continuous Growth</h3>
                    <p className="text-gray-600">We encourage personal development and pushing beyond comfort zones. Growth happens when we challenge ourselves and support each other.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">Passion-Driven</h3>
                    <p className="text-gray-600">Our love for running drives everything we do and every event we organize. Passion is contagious and inspires others to join our journey.</p>
                  </div>
                </div>
              </div>

              <div className="neumorphic-card p-8">
                <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#00D8D2] mb-2">2020</div>
                      <h3 className="text-lg font-bold text-black mb-2">Founded</h3>
                      <p className="text-gray-600 text-sm">Started with 5 passionate runners meeting weekly in Dhanmondi Lake</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#00D8D2] mb-2">2022</div>
                      <h3 className="text-lg font-bold text-black mb-2">First Marathon</h3>
                      <p className="text-gray-600 text-sm">Organized our first official marathon with 50 participants</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#00D8D2] mb-2">2024</div>
                      <h3 className="text-lg font-bold text-black mb-2">200+ Members</h3>
                      <p className="text-gray-600 text-sm">Reached 200+ active members across multiple cities</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    What started as a small group of friends running together has evolved into Bangladesh's most 
                    vibrant running community. We've organized over 50 events, helped hundreds of runners achieve 
                    their goals, and created lasting friendships that extend beyond the running track.
                  </p>
                </div>
              </div>

              <div className="neumorphic-card p-8">
                <h2 className="text-3xl font-bold text-black mb-6">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#00D8D2] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">MR</span>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">Mohammad Rahman</h3>
                    <p className="text-gray-600 text-sm mb-2">Founder & Head Coach</p>
                    <p className="text-gray-500 text-xs">Marathon runner with 10+ years experience</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#00D8D2] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">SA</span>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">Sarah Ahmed</h3>
                    <p className="text-gray-600 text-sm mb-2">Event Coordinator</p>
                    <p className="text-gray-500 text-xs">Organized 30+ successful running events</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#00D8D2] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">KH</span>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">Karim Hassan</h3>
                    <p className="text-gray-600 text-sm mb-2">Community Manager</p>
                    <p className="text-gray-500 text-xs">Building connections and growing our community</p>
                  </div>
                </div>
              </div>

              <div className="neumorphic-card p-8">
                <h2 className="text-3xl font-bold text-black mb-6">Join Our Community</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Why Join RunRise Nation?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00D8D2] rounded-full mt-2"></div>
                        <span className="text-gray-600">Access to expert coaching and training programs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00D8D2] rounded-full mt-2"></div>
                        <span className="text-gray-600">Participate in exclusive events and races</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00D8D2] rounded-full mt-2"></div>
                        <span className="text-gray-600">Connect with like-minded runners</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00D8D2] rounded-full mt-2"></div>
                        <span className="text-gray-600">Get personalized training plans</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Ready to Start?</h3>
                    <p className="text-gray-600 mb-6">
                      Whether you're a complete beginner or an experienced runner, there's a place for you 
                      in our community. Join us and discover what you're capable of achieving.
                    </p>
                    <button className="bg-gradient-to-r from-[#00ead3] to-[#00d4c0] hover:from-[#00d4c0] hover:to-[#00ead3] px-6 py-3 rounded-full text-black font-bold transition-all duration-300 hover:shadow-lg">
                      Join RunRise Nation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
