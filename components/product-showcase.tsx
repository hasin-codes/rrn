"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const IMAGES = [
  "/placeholder.svg?height=100&width=100&text=Polo 1",
  "/placeholder.svg?height=100&width=100&text=Polo 2",
  "/placeholder.svg?height=100&width=100&text=Polo 3",
  "/placeholder.svg?height=100&width=100&text=Polo 4",
  "/placeholder.svg?height=100&width=100&text=Polo 5",
]

export function ProductShowcase({ selectedQuantity }: { selectedQuantity: number }) {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)

  const openPreview = (index: number) => setPreviewIndex(index)
  const closePreview = () => setPreviewIndex(null)
  const nextImage = () => setPreviewIndex((prev) => (prev === null ? null : (prev + 1) % IMAGES.length))
  const prevImage = () => setPreviewIndex((prev) => (prev === null ? null : (prev - 1 + IMAGES.length) % IMAGES.length))

  return (
    <div className="bg-white/5 rounded-lg p-4 space-y-4">
      <div className="grid grid-cols-5 gap-2">
        {IMAGES.map((src, i) => (
          <Image
            key={i}
            src={src || "/placeholder.svg"}
            alt={`Ferrari Polo ${i + 1}`}
            width={100}
            height={100}
            className="w-full h-auto rounded cursor-pointer"
            onClick={() => openPreview(i)}
          />
        ))}
      </div>
      <p className="text-white text-sm">
        Experience the pinnacle of style and comfort with our Ferrari Polo. Crafted from premium materials, this polo
        offers a perfect blend of elegance and sportiness. Its tailored fit ensures a sleek silhouette, while the
        breathable fabric keeps you cool and comfortable.
      </p>
      <p className="text-white font-bold">Price: ${selectedQuantity * 99}</p>

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
                src={IMAGES[previewIndex] || "/placeholder.svg"}
                alt={`Ferrari Polo ${previewIndex + 1}`}
                width={500}
                height={300}
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

