"use client"

import { motion } from "framer-motion"
import { ArrowRight, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { SubmissionResult } from "@/lib/types"

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

export function SubmissionSuccess({
  data,
  onReset,
}: {
  data: SubmissionResult
  onReset: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white/5 rounded-lg overflow-hidden"
    >
      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <div className="bg-[#009688]/20 p-3 rounded-full">
            <Trophy className="h-8 w-8 text-[#009688]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-center space-y-2"
        >
          <h2 className="text-xl font-bold text-white">Submission Successful!</h2>
          <p className="text-white/70">Your run data has been submitted successfully.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="space-y-4"
        >
          <div className="bg-white/10 p-4 rounded-lg space-y-2">
            <p className="text-white/70 text-sm">Reference ID</p>
            <p className="text-white font-medium">{data.referenceId}</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg space-y-2">
            <p className="text-white/70 text-sm">Submission Date</p>
            <p className="text-white">{formatDate(new Date(data.submissionDate))}</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg space-y-2">
            <p className="text-white/70 text-sm">Name</p>
            <p className="text-white">{data.name}</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg space-y-2">
            <p className="text-white/70 text-sm">Bib Number</p>
            <p className="text-white">{data.bibNumber}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            className="bg-white/5 p-4 rounded-lg"
          >
            <p className="text-white text-sm">
              Thank you for submitting your data! Our team will review your submission and update your status
              shortly. You will receive a confirmation email once your submission has been approved.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        className="bg-white/5 p-4"
      >
        <Button onClick={onReset} className="w-full bg-[#009688] hover:bg-[#009688]/90 text-white">
          Submit Another Entry
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  )
}

