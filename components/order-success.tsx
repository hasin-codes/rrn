"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import type { OrderSummary } from "@/lib/types"
import { formatDate } from "@/lib/utils"

export function OrderSuccess({
  data,
  onReset,
}: {
  data: OrderSummary
  onReset: () => void
}) {
  const calculateSubtotal = () => {
    return data.items.reduce((total, item) => total + item.quantity * 99, 0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white/5 rounded-xl overflow-hidden"
    >
      <div className="p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center space-x-4"
        >
          <div className="rounded-full bg-[#FF2800]/10 p-3">
            <CheckCircle2 className="h-6 w-6 text-[#FF2800]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Order Confirmed!</h2>
            <p className="text-white/60 text-sm">Order #{data.orderNumber}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white/60">Order Summary</h3>
            <p className="text-sm text-white">{formatDate(new Date(data.orderDate))}</p>
          </div>

          <div className="space-y-2">
            {data.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 * index }}
                className="flex justify-between text-sm"
              >
                <div className="space-y-1">
                  <p className="text-white">Ferrari Polo - Size {item.size}</p>
                  <p className="text-white/60">Quantity: {item.quantity}</p>
                </div>
                <p className="text-white font-medium">${item.quantity * 99}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="border-t border-white/10 pt-2 space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Subtotal</span>
              <span className="text-white">${calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Shipping</span>
              <span className="text-white">Free</span>
            </div>
            <div className="flex justify-between text-base font-medium pt-2">
              <span className="text-white">Total</span>
              <span className="text-[#FF2800]">${data.total}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            className="border-t border-white/10 pt-4 space-y-2"
          >
            <h3 className="text-sm font-medium text-white/60">Shipping Details</h3>
            <div className="space-y-1 text-sm text-white">
              <p>{data.name}</p>
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p className="whitespace-pre-line">{data.address}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        className="bg-white/5 p-4"
      >
        <Button onClick={onReset} className="w-full bg-[#FF2800] hover:bg-[#FF2800]/90 text-white">
          Place Another Order
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  )
}

