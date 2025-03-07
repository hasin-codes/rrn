"use client"

import { motion } from "framer-motion"
import { useFormContext } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/form-error"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const slideAnimation = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
}

export function StepTwo() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <motion.div {...slideAnimation} className="space-y-4">
      <h2 className="text-lg font-medium text-white">Run Information</h2>

      <div className="space-y-2">
        <Label htmlFor="bibNumber" className="text-white">
          Bib Number
        </Label>
        <Input
          id="bibNumber"
          className="bg-white/10 border-white/20 text-white"
          {...register("bibNumber")}
        />
        {errors.bibNumber && <FormError message={errors.bibNumber.message as string} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="category" className="text-white">
          Category
        </Label>
        <RadioGroup id="category" defaultValue="7k" className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="7k" value="7k" />
            <Label htmlFor="7k" className="text-white">
              7K
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="14k" value="14k" />
            <Label htmlFor="14k" className="text-white">
              14K
            </Label>
          </div>
        </RadioGroup>
        {errors.category && <FormError message={errors.category.message as string} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="stravaLink" className="text-white">
          Strava Link
        </Label>
        <Input
          id="stravaLink"
          type="url"
          placeholder="https://www.strava.com/activities/..."
          className="bg-white/10 border-white/20 text-white"
          {...register("stravaLink")}
        />
        {errors.stravaLink && <FormError message={errors.stravaLink.message as string} />}
      </div>

      <div className="mt-2 text-white/70 text-sm">
        <p>Please provide your Strava activity link. This is required to verify your run data.</p>
      </div>
    </motion.div>
  )
}

