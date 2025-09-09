
export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "RunRise Nation 15K Challenge",
      date: "February 15, 2025",
      location: "Central Park, Dhaka",
      description: "Join us for our signature 15K challenge featuring scenic routes through the heart of the city. Perfect for intermediate runners looking to push their limits.",
      price: "৳1,500",
      participants: "150/200",
      category: "Challenge"
    },
    {
      title: "Spring Marathon 2025",
      date: "March 22, 2025",
      location: "Hatirjheel, Dhaka",
      description: "Our annual spring marathon featuring full marathon, half marathon, and 10K categories. Experience the beauty of spring in Dhaka.",
      price: "৳2,500",
      participants: "89/150",
      category: "Marathon"
    },
    {
      title: "Night Run Series",
      date: "April 5, 2025",
      location: "Dhanmondi Lake",
      description: "Experience running under the stars with our popular night run series. Glow sticks, music, and an unforgettable atmosphere.",
      price: "৳800",
      participants: "45/100",
      category: "Fun Run"
    },
    {
      title: "Trail Running Adventure",
      date: "April 20, 2025",
      location: "Sundarbans Trail",
      description: "Explore nature with our trail running adventure through scenic forest paths. Perfect for nature lovers and adventure seekers.",
      price: "৳2,000",
      participants: "23/50",
      category: "Trail"
    }
  ];

  return (
    <>
      {/* Events Overview Section */}
      <div className="w-full py-4 px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic-card overflow-hidden space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold">Upcoming Events</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Join Our Events
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover exciting running events designed for every level. From fun runs to marathons, 
                join our community and challenge yourself in a supportive environment.
              </p>
            </div>

            {/* Events Grid */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="neumorphic-card p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-block px-3 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded text-sm">
                        <span className="text-[#00827e] font-bold">{event.category}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500 block">{event.date}</span>
                        <span className="text-xs text-gray-400">{event.participants} registered</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-black mb-3">{event.title}</h2>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500">
                        <span className="block">📍 {event.location}</span>
                        <span className="block">💰 {event.price}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-[#00ead3] to-[#00d4c0] hover:from-[#00d4c0] hover:to-[#00ead3] px-4 py-2 rounded-full text-black font-bold text-sm transition-all duration-300 hover:shadow-lg">
                      Register Now
                    </button>
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


