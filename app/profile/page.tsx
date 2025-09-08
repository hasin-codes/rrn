import FlowingMenu from '@/components/FlowingMenu'

export default function ProfilePage() {
  const demoItems = [
    { 
      link: '#', 
      text: 'Manage Your Profile', 
      image: '/ui/MEDAL.png' 
    },
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
                <span className="text-[#00827e] font-bold">User Profile</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Your Profile
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Manage your RunRise Nation profile, track your progress, 
                and access your personal running dashboard.
              </p>
            </div>

            {/* Profile Content */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Profile Info */}
                <div className="neumorphic-card p-6">
                  <h2 className="text-2xl font-bold text-black mb-6">Profile Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <div className="neumorphic-card p-3">
                        <span className="text-gray-600">John Doe</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <div className="neumorphic-card p-3">
                        <span className="text-gray-600">john.doe@example.com</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                      <div className="neumorphic-card p-3">
                        <span className="text-gray-600">January 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Running Stats */}
                <div className="neumorphic-card p-6">
                  <h2 className="text-2xl font-bold text-black mb-6">Running Statistics</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Runs</span>
                      <span className="text-2xl font-bold text-black">47</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Distance</span>
                      <span className="text-2xl font-bold text-black">312 km</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Best 5K Time</span>
                      <span className="text-2xl font-bold text-black">22:15</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Events Completed</span>
                      <span className="text-2xl font-bold text-black">8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activities */}
              <div className="mt-8">
                <div className="neumorphic-card p-6">
                  <h2 className="text-2xl font-bold text-black mb-6">Recent Activities</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-[#00D8D2] rounded-full"></div>
                      <span className="text-gray-600">Completed RunRise Nation 10K - January 15, 2025</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-[#00D8D2] rounded-full"></div>
                      <span className="text-gray-600">Downloaded race certificate - January 12, 2025</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-[#00D8D2] rounded-full"></div>
                      <span className="text-gray-600">Joined community run - January 10, 2025</span>
                    </div>
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
