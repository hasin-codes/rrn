
export default function CollabPage() {
  return (
    <>
      <div className="w-full py-4 px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic-card overflow-hidden space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold">Collaboration</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Partner with Us
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join hands with RunRise Nation to create amazing running experiences. 
                We're always looking for partners who share our passion for running and community building.
              </p>
            </div>

            {/* Partnership Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="neumorphic-card p-6">
                <h3 className="text-xl font-bold text-black mb-4">Brand Partnerships</h3>
                <p className="text-gray-600">Collaborate with us to reach the running community and promote your brand.</p>
              </div>
              
              <div className="neumorphic-card p-6">
                <h3 className="text-xl font-bold text-black mb-4">Event Collaborations</h3>
                <p className="text-gray-600">Partner with us to organize and promote running events and races.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
