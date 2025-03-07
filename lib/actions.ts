"use server"

import { z } from "zod"
import type { RunnerData, SubmissionResult } from "./types"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  bibNumber: z.string().min(1, "Bib number is required"),
  stravaLink: z.string().url("Please enter a valid Strava URL").min(1, "Strava link is required"),
})

export async function submitRunData(
  data: RunnerData,
): Promise<{ success: boolean; data?: SubmissionResult; error?: string }> {
  try {
    // Validate the form data
    const validatedData = formSchema.parse(data)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Generate reference ID
    const referenceId = `RUN${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Create submission result
    const submissionResult: SubmissionResult = {
      ...validatedData,
      referenceId,
      submissionDate: new Date().toISOString(),
    }

    // Return submission result
    return {
      success: true,
      data: submissionResult,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Invalid form data",
      }
    }
    return {
      success: false,
      error: "Something went wrong",
    }
  }
}

