export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8BCC8] via-[#C8CCD8] to-[#BCC0CC]">
      {children}
    </div>
  )
}
