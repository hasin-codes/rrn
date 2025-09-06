import Image from "next/image";
import { Card } from "@/components/ui/card";

export function StatsSection() {
  return (
    <section className="w-full py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-sm p-4 lg:p-6 space-y-12 bg-white rounded-sm">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded-3xl backdrop-blur-sm">
            <span className="text-[#00827e] font-bold">RunRise Nation</span>
          </div>
          
          <h2 className="text-3xl font-bold text-black">One Track, Many Journeys</h2>
        </div>


        {/* Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Community Engagement Card */}
          <div className="bg-white border-2 border-[#00827e] rounded-2xl p-6 backdrop-blur-md space-y-4">
            <div className="inline-block px-3 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded-3xl">
              <span className="text-[#00827e] font-bold text-sm">Last Event</span>
            </div>
            
            <h3 className="text-lg font-bold text-black text-center">
              Community Engagement in Races
            </h3>
            
            <div className="text-center border-t border-black pt-4">
              <span className="text-4xl font-bold text-black">85</span>
              <span className="text-3xl text-[#00827e]">%</span>
            </div>
          </div>

          {/* Events Card */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="h-32 relative">
              <Image 
                src="/ui/ola3.png" 
                alt="Events" 
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded-3xl">
                  <span className="text-[#00827e] font-bold text-sm">Events</span>
                </div>
                <div className="px-3 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded-3xl">
                  <span className="text-[#00827e] font-bold text-sm">Bootcamps</span>
                </div>
              </div>
              
              <div className="px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded-3xl">
                <span className="text-[#00827e] font-bold text-sm">Exclusive Discounts</span>
              </div>
            </div>
          </div>

          {/* Running Stats */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-black">Running Knows No Boundaries</h3>
              <p className="text-sm text-gray-600">
                From every gender, race, and walk of life - our community thrives because every stride adds to the story.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stat */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-[#00eaff]">
            Community Engagement in Races
          </h3>
        </div>
        </Card>
      </div>
    </section>
  );
}