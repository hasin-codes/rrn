export type RunnerData = {
  name: string
  email: string
  phone: string
  bibNumber: string
  stravaLink?: string
}

export type SubmissionResult = RunnerData & {
  referenceId: string
  submissionDate: string
}

export type CartItem = {
  id: string
  size: string
  quantity: number
}

export type OrderSummary = {
  orderNumber: string
  orderDate: string
  name: string
  email: string
  phone: string
  address: string
  items: CartItem[]
  total: number
}

