"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface RaceCardProps {
  title: string;
  labels: string[]; // up to 4 short chips e.g. ["15K", "Live", "BIB", "2025"]
  thumbnailSrc?: string; // defaults to /ui/Thumb.jpg
  href?: string;
  className?: string;
}

export default function RaceCard({
  title,
  labels,
  thumbnailSrc = "/ui/Thumb.jpg",
  href = "#",
  className,
}: RaceCardProps) {
  const Card = (
    <div
      className={clsx(
        "select-none w-full bg-white rounded-2xl border border-white shadow-[inset_-6px_-6px_20px_rgba(255,255,255,0.6),_10px_10px_30px_rgba(174,174,192,0.25)]",
        "aspect-[2/1] p-2 sm:p-3 min-h-[200px] md:min-h-[240px]",
        className
      )}
      style={{ aspectRatio: "2 / 1" }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <Image
          src={thumbnailSrc}
          alt={title}
          fill
          priority={false}
          className="object-cover"
        />

        {/* Top labels */}
        <div className="absolute top-2 left-2 right-2 flex flex-wrap gap-2">
          {labels.slice(0, 4).map((label, idx) => (
            <span
              key={idx}
              className="px-2 py-1 rounded-md text-[11px] sm:text-xs font-semibold leading-none bg-white/80 backdrop-blur-[2px] border border-white/70 text-gray-800"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Bottom gradient + title */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute left-3 right-3 bottom-3">
          <h3 className="text-white font-bold text-base sm:text-lg line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block hover:scale-[1.01] transition-transform duration-200">
      {Card}
    </Link>
  ) : (
    Card
  );
}


