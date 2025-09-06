"use client";

import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card } from "@/components/ui/card";

export function PacersSection() {
  return (
    <section className="w-full py-6 lg:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-sm p-4 lg:p-6 space-y-12 bg-white rounded-sm">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
              <span className="text-[#00827e] font-bold">Community</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight">
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
          
          {/* Left Side - Small Image and Counter */}
          <div className="space-y-8">
            
            
            <div className="space-y-2">
              <div className="text-4xl font-bold text-black underline">
                02<span className="text-2xl text-gray-600">/10</span>
              </div>
            </div>
          </div>

          {/* Right Side - Event Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-black leading-tight">
              Regular Event<br />Bootcamp
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Pace yourself alongside passionate runners and certified trainers in dynamic solo or group runs.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative grid grid-cols-3 gap-2 md:gap-6 mt-16">
          <div className="h-48 md:h-64 rounded-2xl overflow-hidden -mt-4 md:-mt-0">
            <Image 
              src="/ui/Rectangle 12.png" 
              alt="Gallery image 1" 
              width={400} 
              height={288} 
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 400px"
            />
          </div>
          <div className="h-56 md:h-80 rounded-2xl overflow-hidden">
            <Image 
              src="/ui/Rectangle 13.png" 
              alt="Gallery image 2" 
              width={400} 
              height={384} 
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 400px"
            />
          </div>
          <div className="h-48 md:h-64 rounded-2xl overflow-hidden mt-4 md:-mt-8">
            <Image 
              src="/ui/Rectangle 14.png" 
              alt="Gallery image 3" 
              width={400} 
              height={384} 
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 400px"
            />
          </div>
        </div>
        </Card>
      </div>
    </section>
  );
}

const pacerData = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Elite Marathon Pacer",
    image: "/ui/Ellipse 1.png",
  },
  {
    id: 2,
    name: "Mike Chen",
    designation: "5K Speed Specialist",
    image: "/ui/Ellipse 2.png",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    designation: "Half Marathon Coach",
    image: "/ui/Ellipse 3.png",
  },
  {
    id: 4,
    name: "David Park",
    designation: "Endurance Trainer",
    image: "/ui/Ellipse 4.png",
  },
];