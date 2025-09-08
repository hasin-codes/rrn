import Image from "next/image";
import { CountUp } from "@/components/ui/count-up";
import { Card } from "@/components/ui/card";

const HERO_TEXTS = ["Join Our", "Running Family", "Beat Your Best"] as const;
const COMMUNITY_COUNT = 203;
const BUTTON_TEXT = "Join our community";

const HeroTitle = ({ text, className }: { text: string; className: string }) => (
  <h1 className={className}>{text}</h1>
);

const RunnerImage = ({ 
  className, 
  sizes, 
  width, 
  height 
}: { 
  className: string; 
  sizes: string; 
  width: number; 
  height: number; 
}) => (
                <Image 
                  src="/ui/piyas.png" 
                  alt="Runner" 
    width={width} 
    height={height} 
    className="w-full h-full object-contain"
    priority
    sizes={sizes}
  />
);

const CommunityStats = () => (
  <div className="space-y-1">
    <h2 className="hero-stats text-2xl lg:text-3xl font-bold text-black">
      <CountUp from={0} to={COMMUNITY_COUNT} duration={2} className="count-up-text" />
      <span>+</span>
    </h2>
    <p className="text-sm lg:text-base text-black leading-tight">
      Active Community Members & Counting
    </p>
  </div>
);

const SneakerImage = () => (
  <div className="flex justify-center py-1 lg:py-2">
    <div className="relative w-24 h-32 lg:w-32 lg:h-40">
      <Image 
        src="/ui/sneaker.png" 
        alt="Running sneaker" 
        width={128} 
        height={160} 
                  className="w-full h-full object-contain"
                  priority
        sizes="(max-width: 1024px) 96px, 128px"
                />
              </div>
            </div>
);

const JoinButton = () => (
  <button className="w-full bg-gradient-to-r from-[#00ead3] to-[#00d4c0] hover:from-[#00d4c0] hover:to-[#00ead3] px-3 lg:px-4 py-2 rounded-full text-black font-bold text-sm lg:text-base transition-all duration-300 hover:shadow-lg">
    {BUTTON_TEXT}
  </button>
);

const EventsCard = () => (
  <div className="neumorphic-card overflow-hidden">
            <div className="grid grid-cols-3 py-3 px-6">
      <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black text-left">Training</h3>
      <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black text-center">Community</h3>
      <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black text-right">Events 2025</h3>
            </div>

            <div className="px-6 pb-2">
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/ui/hero.png" 
                  alt="Events hero" 
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 py-3 px-6">
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black text-left">View Pacers</h3>
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black text-right">Team</h3>
              </div>
            </div>
);

const HeroContent = ({ isMobile = false }: { isMobile?: boolean }) => {
  const titleClasses = isMobile 
    ? "hero-title text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.9] tracking-tight"
    : "hero-title text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black leading-[0.9] tracking-tight";
  
  const runnerClasses = isMobile
    ? "absolute -right-4 sm:-right-6 md:-right-8 top-1/2 -translate-y-1/2 w-24 h-32 sm:w-32 sm:h-40 md:w-40 md:h-52 z-10"
    : "absolute -right-8 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 w-48 h-64 lg:w-56 lg:h-72 xl:w-64 xl:h-80 2xl:w-72 2xl:h-96 z-10";
  
  const runnerSizes = isMobile
    ? "(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px"
    : "(max-width: 1024px) 192px, (max-width: 1280px) 224px, (max-width: 1536px) 256px, 288px";
  
  const runnerDimensions = isMobile ? { width: 160, height: 208 } : { width: 288, height: 384 };
  
  const cardPadding = isMobile 
    ? { padding: "1.5rem 2rem 2.5rem 2rem" }
    : { padding: "2rem 2.5rem 2.5rem 2.5rem" };

  return (
    <Card className="neumorphic-card flex flex-col justify-center relative overflow-hidden h-full" style={cardPadding}>
      <div className="space-y-0 relative">
        <div className="relative">
          <HeroTitle text={HERO_TEXTS[0]} className={titleClasses} />
          </div>
        <HeroTitle text={HERO_TEXTS[1]} className={titleClasses} />
        <HeroTitle text={HERO_TEXTS[2]} className={titleClasses} />

        <div className={runnerClasses}>
          <RunnerImage 
                  className="w-full h-full object-contain"
            sizes={runnerSizes}
            width={runnerDimensions.width}
            height={runnerDimensions.height}
                />
              </div>
          </div>
    </Card>
  );
};

const StatsCard = ({ isMobile = false }: { isMobile?: boolean }) => {
  const cardPadding = isMobile 
    ? { padding: "1rem 1.5rem" }
    : { padding: "2rem 2.5rem 2.5rem 2.5rem" };

  return (
    <Card className="neumorphic-card text-center space-y-3 lg:space-y-4 flex flex-col justify-center h-full" style={cardPadding}>
      <CommunityStats />
      <SneakerImage />
      <JoinButton />
          </Card>
  );
};

export function HeroSection() {
  return (
    <div className="w-full py-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden space-y-4">
          <HeroContent isMobile />
          <EventsCard />
          <StatsCard isMobile />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-4 lg:gap-6 items-stretch hero-content">
          <div className="lg:col-span-2">
            <HeroContent />
          </div>
          <div>
            <StatsCard />
            </div>
        </div>
      </div>
    </div>
  );
}