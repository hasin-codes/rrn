"use client";

import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card } from "@/components/ui/card";

export function PacersSection() {
  return (
    <section className="w-full py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="neumorphic-card rounded-lg overflow-hidden p-4 lg:p-6 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
              <span className="text-[#00827e] font-bold">Community</span>
            </div>
            
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-normal text-black leading-tight">
              A Running Tribe That Pushes Beyond Every Finish Line.
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-4xl font-italic text-black font-nike">#PerfectPacers</h3>
            
            {/* Animated Tooltip Profile Images */}
            <div className="flex -space-x-2">
              <AnimatedTooltip items={pacerData} />
            </div>
            
            <p className="text-gray-600 max-w-md">
              Connect with elite pacers and shape your stride, speed, and stamina with purpose. We've crafted the ultimate track for growth.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          

          {/* Right Side - Event Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-black leading-tight">
              Regular Event Bootcamp
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Pace yourself alongside passionate runners and certified trainers in dynamic solo or group runs.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative grid grid-cols-3 gap-2 md:gap-4 mt-8 md:mt-12">
  <div className="h-32 md:h-40 lg:h-48 rounded-xl md:rounded-2xl overflow-hidden">
    <Image
      src="/ui/ola3.png"
      alt="RunRise Nation community group photo"
      width={400}
      height={200}
      className="w-full h-full object-cover"
      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 400px"
    />
  </div>
  <div className="h-32 md:h-40 lg:h-48 rounded-xl md:rounded-2xl overflow-hidden">
    <Image
      src="/ui/Rectangle 13.png"
      alt="Gallery image 2"
      width={400}
      height={200}
      className="w-full h-full object-cover"
      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 400px"
    />
  </div>
  <div className="h-32 md:h-40 lg:h-48 rounded-xl md:rounded-2xl overflow-hidden">
    <Image
      src="/ui/Rectangle 14.png"
      alt="Gallery image 3"
      width={400}
      height={200}
      className="w-full h-full object-cover"
      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 400px"
    />
  </div>
</div>
        
        </div>
      </div>
    </section>
  );
}
const pacerData = [
  {
    id: 1,
    name: "Pacer 1",
    designation: "Elite Marathon Pacer",
    image: "/ui/Ellipse 1.png",
  },
  {
    id: 2,
    name: "Pacer 2",
    designation: "5K Speed Specialist",
    image: "/ui/Ellipse 2.png",
  },
  {
    id: 3,
    name: "Pacer 3",
    designation: "Half Marathon Coach",
    image: "/ui/Ellipse 3.png",
  },
  {
    id: 4,
    name: "Pacer 4",
    designation: "Endurance Trainer",
    image: "/ui/Ellipse 4.png",
  },
  {
    id: 5,
    name: "Pacer 5",
    designation: "Elite Marathon Pacer",
    image: "/ui/Ellipse 1.png",
  },
  {
    id: 6,
    name: "Pacer 6",
    designation: "5K Speed Specialist",
    image: "/ui/Ellipse 2.png",
  },
  {
    id: 7,
    name: "Pacer 7",
    designation: "Half Marathon Coach",
    image: "/ui/Ellipse 3.png",
  },
  {
    id: 8,
    name: "Pacer 8",
    designation: "Endurance Trainer",
    image: "/ui/Ellipse 4.png",
  },
];
