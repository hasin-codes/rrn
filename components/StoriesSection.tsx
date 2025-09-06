"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function StoriesSection() {
  const cards = storiesData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-4 px-4 bg-[#dcdeea]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm p-4 lg:p-6 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
            <span className="text-[#00827e] font-bold">Stories</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
            Every step has meaning
          </h2>
        </div>

        {/* Apple Cards Carousel */}
        <Carousel items={cards} autoScroll={true} scrollSpeed={35} />
        </div>
      </div>
    </section>
  );
}

const StoryContent = ({ storyNumber }: { storyNumber: number }) => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={`story-content-${storyNumber}-${index}`}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Every runner has a story worth telling.
              </span>{" "}
              From overcoming personal challenges to achieving new personal records, 
              our community members inspire us every day. Join thousands of runners 
              who have found their stride and discovered the joy of running together.
            </p>
            <div className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#00ead3] to-[#00d4c0] rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">🏃‍♂️</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const storiesData = [
  {
    category: "Personal Journey",
    title: "From Couch to 5K Champion",
    src: "/assets/b271844e29762f8cf47c6b3f952d4a8e520d5e56.png",
    content: <StoryContent storyNumber={1} />,
  },
  {
    category: "Community Spirit",
    title: "Running Together, Growing Together",
    src: "/assets/067a5c00d3ffc56edf6671e3e5c01bc1cd938a38.png",
    content: <StoryContent storyNumber={2} />,
  },
  {
    category: "Achievement",
    title: "Breaking Barriers, Setting Records",
    src: "/assets/b2449a063823a1b7e20892c03c56ffe72b3a433b.png",
    content: <StoryContent storyNumber={3} />,
  },
  {
    category: "Inspiration",
    title: "Every Mile Tells a Story",
    src: "/assets/b271844e29762f8cf47c6b3f952d4a8e520d5e56.png",
    content: <StoryContent storyNumber={4} />,
  },
  {
    category: "Transformation",
    title: "Finding Strength in Every Step",
    src: "/assets/067a5c00d3ffc56edf6671e3e5c01bc1cd938a38.png",
    content: <StoryContent storyNumber={5} />,
  },
  {
    category: "Community",
    title: "Building Bonds Through Running",
    src: "/assets/b2449a063823a1b7e20892c03c56ffe72b3a433b.png",
    content: <StoryContent storyNumber={6} />,
  },
];