"use client"

import { motion } from "framer-motion"
import { useFormContext } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/form-error"

const slideAnimation = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
}

export function StepOne() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <motion.div {...slideAnimation} className="space-y-4">
      <h2 className="text-lg font-medium text-white">Personal Information</h2>

      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          Full Name
        </Label>
        <Input id="name" className="bg-white/10 border-white/20 text-white" {...register("name")} />
        {errors.name && <FormError message={errors.name.message as string} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input id="email" type="email" className="bg-white/10 border-white/20 text-white" {...register("email")} />
        {errors.email && <FormError message={errors.email.message as string} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">
          Phone Number
        </Label>
        <Input id="phone" type="tel" className="bg-white/10 border-white/20 text-white" {...register("phone")} />
        {errors.phone && <FormError message={errors.phone.message as string} />}
      </div>
    </motion.div>
  )
}

