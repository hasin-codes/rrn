import Image from "next/image";
import { Card } from "@/components/ui/card";

export function EventsSection() {
  return (
    <section className="w-full py-6 lg:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-sm overflow-hidden bg-white rounded-sm">
    
    {/* Header */}
    <div className="grid grid-cols-3 py-2 px-6 bg- ">
      <div className="text-center">
        <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black">Training</h3>
      </div>
      <div className="text-center">
        <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black">Community Run</h3>
      </div>
      <div className="text-center">
        <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black">Running events 2025</h3>
      </div>
    </div>

    {/* Main Image */}
    <div className="relative px-6 py-1">
      <Image
        src="/ui/hero.png"
        alt="Events hero"
        width={1200}
        height={600}
        className="object-cover rounded-sm"
        priority
      />
    </div>

    {/* Footer */}
    <div className="grid grid-cols-2 py-2 px-6 bg- ">
      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black">View Pacers</h3>
      </div>
      <div className="text-center sm:text-right">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black">Team</h3>
      </div>
    </div>
        </Card>
      </div>
    </section>
  );
}