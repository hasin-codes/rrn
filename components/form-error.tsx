import { XCircle } from "lucide-react"

export function FormError({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-2 text-red-500 text-sm">
      <XCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  )
}

