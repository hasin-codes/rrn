"use client"

import { motion } from "framer-motion"
import { useFormContext } from "react-hook-form"

const slideAnimation = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
}

export function StepThree() {
  const { watch } = useFormContext()
  const formData = watch()

  return (
    <motion.div {...slideAnimation} className="space-y-6">
      <h2 className="text-lg font-medium text-white">Review Your Information</h2>

      <div className="rounded-lg bg-white/5 p-4 space-y-4">
        <h3 className="font-medium text-white">Personal Details</h3>
        <div className="space-y-2 text-white/80">
          <p>
            <span className="text-white/60">Name:</span> {formData.name}
          </p>
          <p>
            <span className="text-white/60">Email:</span> {formData.email}
          </p>
          <p>
            <span className="text-white/60">Phone:</span> {formData.phone}
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-white/5 p-4 space-y-4">
        <h3 className="font-medium text-white">Run Information</h3>
        <div className="space-y-2 text-white/80">
          <p>
            <span className="text-white/60">Bib Number:</span> {formData.bibNumber}
          </p>
          {formData.stravaLink && (
            <p>
              <span className="text-white/60">Strava Link:</span>{" "}
              <a
                href={formData.stravaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF2800] hover:underline"
              >
                View Activity
              </a>
            </p>
          )}
        </div>
      </div>

      <p className="text-white/70 text-sm">
        Please review your information carefully before submitting. By submitting this form, you confirm that all
        provided information is accurate.
      </p>
    </motion.div>
  )
}

