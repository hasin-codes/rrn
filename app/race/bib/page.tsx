
export default function BIBPage() {
  return (
    <>
      <div className="w-full py-4 px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic-card overflow-hidden space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold">BIB</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Get Your Race Number
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Download your race BIB (Bib Identification Number) for upcoming events. 
                Your BIB contains important race information and timing chip details.
              </p>
            </div>

            {/* BIB Download Section */}
            <div className="max-w-2xl mx-auto">
              <div className="neumorphic-card p-8">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">Download Your BIB</h2>
                <p className="text-gray-600 text-center mb-6">Enter your registration details to download your race BIB</p>
                
                <div className="space-y-4">
                  <div className="neumorphic-card p-4">
                    <h3 className="font-bold text-black mb-2">Upcoming Events</h3>
                    <p className="text-gray-600">RunRise Nation 15K - January 2025</p>
                    <button className="mt-3 bg-gradient-to-r from-[#00ead3] to-[#00d4c0] hover:from-[#00d4c0] hover:to-[#00ead3] px-4 py-2 rounded-full text-black font-bold text-sm transition-all duration-300 hover:shadow-lg">
                      Download BIB
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
