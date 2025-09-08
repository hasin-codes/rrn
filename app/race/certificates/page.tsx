import FlowingMenu from '@/components/FlowingMenu'

export default function CertificatesPage() {
  const demoItems = [
    { 
      link: '#', 
      text: 'Download Your Certificates', 
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
                <span className="text-[#00827e] font-bold">Certificates</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Download Your Certificates
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access and download your race completion certificates. 
                Celebrate your achievements with official RunRise Nation certificates.
              </p>
            </div>

            {/* Certificates Section */}
            <div className="max-w-4xl mx-auto">
              <div className="neumorphic-card p-8">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">Your Certificates</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="neumorphic-card p-6">
                    <h3 className="font-bold text-black mb-2">RunRise Nation 10K</h3>
                    <p className="text-gray-600 mb-4">Completed on December 15, 2024</p>
                    <p className="text-sm text-gray-500 mb-4">Time: 45:32</p>
                    <button className="bg-gradient-to-r from-[#00ead3] to-[#00d4c0] hover:from-[#00d4c0] hover:to-[#00ead3] px-4 py-2 rounded-full text-black font-bold text-sm transition-all duration-300 hover:shadow-lg">
                      Download Certificate
                    </button>
                  </div>
                  
                  <div className="neumorphic-card p-6">
                    <h3 className="font-bold text-black mb-2">RunRise Nation 5K</h3>
                    <p className="text-gray-600 mb-4">Completed on November 20, 2024</p>
                    <p className="text-sm text-gray-500 mb-4">Time: 22:15</p>
                    <button className="bg-gradient-to-r from-[#00ead3] to-[#00d4c0] hover:from-[#00d4c0] hover:to-[#00ead3] px-4 py-2 rounded-full text-black font-bold text-sm transition-all duration-300 hover:shadow-lg">
                      Download Certificate
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
