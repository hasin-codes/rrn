"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { StepOne } from "@/components/step-one"
import { StepTwo } from "@/components/step-two"
import { StepThree } from "@/components/step-three"
import { SubmissionSuccess } from "@/components/submission-success"
import { submitRunData } from "@/lib/actions"
import type { RunnerData, SubmissionResult } from "@/lib/types"
import { ProgressSteps } from "@/components/progress-steps"
import { MarathonShowcase } from "@/components/marathon-showcase"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  bibNumber: z.string().min(1, "Bib number is required"),
  stravaLink: z.string().url("Please enter a valid Strava URL").optional().or(z.literal("")),
})

export default function MarathonForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionData, setSubmissionData] = useState<SubmissionResult | null>(null)
  const [videoError, setVideoError] = useState(false)

  const methods = useForm<RunnerData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      bibNumber: "",
      stravaLink: "",
    },
  })

  const onSubmit = async (data: RunnerData) => {
    try {
      setIsSubmitting(true)
      const result = await submitRunData(data)

      if (result.success && result.data) {
        setSubmissionData(result.data)
      } else {
        console.error("Submission failed:", result.error)
        methods.setError("root", {
          type: "manual",
          message: result.error || "Something went wrong",
        })
      }
    } catch (error) {
      console.error("Error during submission:", error)
      methods.setError("root", {
        type: "manual",
        message: "Something went wrong",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    methods.reset()
    setStep(1)
    setSubmissionData(null)
  }

  const nextStep = async () => {
    const fields: Array<"name" | "email" | "phone" | "bibNumber" | "stravaLink"> = getFieldsToValidate(step) as Array<"name" | "email" | "phone" | "bibNumber" | "stravaLink">;
    const isValid = await methods.trigger(fields);
    if (isValid) setStep((prev) => Math.min(prev + 1, 3));
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const getFieldsToValidate = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return ["name", "email", "phone"]
      case 2:
        return ["bibNumber", "stravaLink"]
      default:
        return []
    }
  }

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4">
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
          onError={() => setVideoError(true)}
          suppressHydrationWarning
        >
          <source src="/0302.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-2xl backdrop-blur-xl bg-black/60 p-6 md:p-8 rounded-3xl border border-white/10 max-h-[90vh] overflow-y-auto"
      >
        <AnimatePresence mode="wait">
          {!submissionData ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Run Data Submission</h1>
                <ProgressSteps currentStep={step} totalSteps={3} />
              </div>

              {step < 3 && <MarathonShowcase step={step} />}

              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {step === 1 && <StepOne key="step1" />}
                    {step === 2 && <StepTwo key="step2" />}
                    {step === 3 && <StepThree key="step3" />}
                  </AnimatePresence>

                  <div className="flex gap-4 pt-4">
                    {step > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={isSubmitting}
                        className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        Back
                      </Button>
                    )}
                    {step < 3 && (
                      <Button
                        type="button"
                        onClick={nextStep}
                        disabled={isSubmitting}
                        className="flex-1 bg-[#009688] hover:bg-[#009688]/90 text-white"
                      >
                        Continue
                      </Button>
                    )}
                    {step === 3 && (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-[#009688] hover:bg-[#009688]/90 text-white"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                            />
                            Processing...
                          </span>
                        ) : (
                          "Submit Data"
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </FormProvider>
            </motion.div>
          ) : (
            <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SubmissionSuccess data={submissionData} onReset={resetForm} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

