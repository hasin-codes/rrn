"use client";

import Image from "next/image";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Card } from "@/components/ui/card";

const GALLERY_IMAGES = [
  { src: "/ui/1.png", alt: "Gallery image 1" },
  { src: "/ui/2.png", alt: "Gallery image 2" },
  { src: "/ui/3.png", alt: "Gallery image 3" },
  { src: "/ui/4.png", alt: "Gallery image 4" },
] as const;

const TESTIMONIALS = [
  {
    quote: "The training programs here are incredible. I went from struggling with 5K to completing my first half marathon. The pacers are amazing!",
    name: "Mike Chen",
    designation: "Half Marathon Finisher",
    src: "/assets/97ec0191e438b44f103e2466fd56c29d64165d8c.png",
  },
  {
    quote: "This community changed my life. Not just physically, but mentally too. Every run feels like a victory now. Thank you RunRise Nation!",
    name: "Emma Rodriguez",
    designation: "Community Member",
    src: "/assets/52f2c34f79f54f88bf6c81f6c15e269561d8a170.png",
  },
  {
    quote: "The bootcamps and group runs are phenomenal. I've made lifelong friends and achieved goals I never thought possible. Highly recommended!",
    name: "David Park",
    designation: "Endurance Athlete",
    src: "/assets/e5230df8aadd7ab648a20581d64e95d416e96aa1.png",
  },
  {
    quote: "From couch to 10K in just 3 months! The structured approach and community motivation made all the difference. I'm now training for my first marathon.",
    name: "Lisa Thompson",
    designation: "Beginner Runner",
    src: "/assets/bdb1f5b60a126f205185519c40016ad13e241067.png",
  },
];

const CommunityBadge = () => (
  <div className="w-fit px-2 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
    <span className="text-[#00827e] font-bold text-sm lg:text-base">Community</span>
  </div>
);

const GalleryImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="aspect-square rounded-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
    <Image 
      src={src} 
      alt={alt} 
      width={200} 
      height={200} 
      className="w-full h-full object-cover"
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
    />
  </div>
);

const ImageGallery = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-3 mt-auto bg-white">
    {GALLERY_IMAGES.map((image, index) => (
      <GalleryImage key={index} src={image.src} alt={image.alt} />
    ))}
  </div>
);

const AboutContent = () => (
  <Card className="neumorphic-card space-y-4 lg:space-y-6 order-2 lg:order-1 flex flex-col">
    <CommunityBadge />
    
    <div className="space-y-3 lg:space-y-4">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-black leading-tight">
        RunRise Nation isn't just about running — 
        <span className="font-normal"> it's about pushing past what you thought was possible.</span>
      </h2>
      
      <p className="text-base lg:text-lg text-black leading-relaxed">
        Our mission is to guide every runner to find their rhythm, break their limits, and enjoy every mile along the way. From sunrise jogs to finish-line sprints, we're here to help you grow, connect, and rise, step by step.
      </p>
    </div>

    <ImageGallery />
  </Card>
);

const TestimonialsCard = () => (
  <Card className="neumorphic-card order-1 lg:order-2 h-full" style={{padding: "0.75rem 1rem"}}>
    <div className="h-full">
      <AnimatedTestimonials 
        testimonials={TESTIMONIALS} 
        autoplay={true}
      />
    </div>
  </Card>
);

export function AboutSection() {
  return (
    <section className="about-section w-full py-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <AboutContent />
        <TestimonialsCard />
      </div>
    </section>
  );
}