import { LoadingSpinner } from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-white">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="text-brand-black/70 mt-4">Loading...</p>
      </div>
    </div>
  )
}
