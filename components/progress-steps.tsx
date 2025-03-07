"use client"

import { motion } from "framer-motion"

interface ProgressStepsProps {
  currentStep: number
  totalSteps: number
}

export function ProgressSteps({ currentStep, totalSteps }: ProgressStepsProps) {
  return (
    <div className="w-full flex items-center justify-between relative">
      <div className="absolute h-[2px] w-full bg-white/10" />
      <motion.div
        className="absolute h-[2px] bg-[#009688]"
        initial={{ width: 0 }}
        animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <div className="relative w-full flex justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber <= currentStep

          return (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              initial={false}
              animate={{
                scale: isActive ? 1 : 0.9,
              }}
            >
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${isActive ? "bg-[#009688] text-white" : "bg-white/10 text-white/40"}
                  transition-colors duration-200
                `}
              >
                {stepNumber}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

