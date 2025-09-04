import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navigation />
      <main className="pt-16 flex items-center justify-center min-h-[80vh]">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold text-brand-red mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
            404
          </h1>
          <h2 className="text-3xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
            Page Not Found
          </h2>
          <p className="text-xl text-brand-black/70 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
          <div className="space-y-4">
            <Link href="/" className="btn-primary inline-block">
              Go Home
            </Link>
            <div className="text-sm text-brand-black/60">
              Or{" "}
              <Link href="/contact" className="text-brand-blue hover:underline">
                contact us
              </Link>{" "}
              if you need help
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
