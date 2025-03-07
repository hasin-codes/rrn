"use client"

import { motion } from "framer-motion"
import { useFormContext } from "react-hook-form"
import type { CartItem } from "@/lib/types"

const slideAnimation = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
}

export function StepFour() {
  const { watch } = useFormContext()
  const formData = watch()
  const items = watch("items") as CartItem[]

  const calculateTotal = () => {
    const itemsTotal = items.reduce((total, item) => total + item.quantity * 99, 0)
    const customizationFee = formData.customization === "name" ? 10 : formData.customization === "number" ? 5 : 0
    return itemsTotal + customizationFee * items.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <motion.div {...slideAnimation} className="space-y-6">
      <div className="rounded-lg bg-white/5 p-4 space-y-4">
        <h3 className="font-medium text-white">Order Items</h3>
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-white">
              <span>
                {item.quantity}x Size {item.size}
              </span>
              <span className="font-medium">${item.quantity * 99}</span>
            </div>
          ))}
        </div>

        {formData.customization !== "none" && (
          <div className="flex justify-between text-white pt-2 border-t border-white/10">
            <span>Customization ({items.reduce((total, item) => total + item.quantity, 0)} items)</span>
            <span className="font-medium">+${formData.customization === "name" ? 10 : 5} each</span>
          </div>
        )}

        <div className="border-t border-white/10 pt-4">
          <div className="flex justify-between text-white">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${calculateTotal()}</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white/5 p-4 space-y-4">
        <h3 className="font-medium text-white">Shipping Details</h3>
        <div className="space-y-2 text-white/80">
          <p>{formData.name}</p>
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
          <p className="whitespace-pre-line">{formData.address}</p>
        </div>
      </div>
    </motion.div>
  )
}

