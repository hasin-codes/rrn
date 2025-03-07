"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const IMAGES = [
  "/IMG-20250126-WA0003.jpg",
  "/7k.jpg",
  "/10k.jpg",
]

interface MarathonShowcaseProps {
  step: number
}

export function MarathonShowcase({ step }: MarathonShowcaseProps) {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)

  const openPreview = (index: number) => setPreviewIndex(index)
  const closePreview = () => setPreviewIndex(null)
  const nextImage = () => setPreviewIndex((prev) => (prev === null ? null : (prev + 1) % IMAGES.length))
  const prevImage = () => setPreviewIndex((prev) => (prev === null ? null : (prev - 1 + IMAGES.length) % IMAGES.length))

  return (
    <div className="bg-white/5 rounded-lg p-3 mb-4">
      {step === 1 ? (
        <div className="w-full relative">
          <div className="relative w-full h-auto max-h-[180px] overflow-hidden rounded">
            <Image
              src={IMAGES[0]}
              alt="Crisis Management Image"
              width={600}
              height={180}
              className="rounded cursor-pointer w-full h-auto object-cover"
              onClick={() => openPreview(0)}
              priority
              quality={85}
            />
          </div>
        </div>
      ) : step === 2 ? (
        <div className="grid grid-cols-2 gap-2">
          {IMAGES.slice(1, 3).map((src, i) => (
            <div key={i} className="relative w-full h-auto max-h-[100px] overflow-hidden rounded">
              <Image
                src={src}
                alt={`Crisis Management Image ${i + 2}`}
                width={300}
                height={100}
                className="rounded cursor-pointer w-full h-auto object-cover"
                onClick={() => openPreview(i + 1)}
              />
            </div>
          ))}
        </div>
      ) : null}

      <AnimatePresence>
        {previewIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={closePreview}
          >
            <div className="relative w-full max-w-3xl h-full max-h-[80vh] flex items-center justify-center">
              <Image
                src={IMAGES[previewIndex]}
                alt={`Crisis Management Image ${previewIndex + 1}`}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

