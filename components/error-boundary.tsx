"use client"

import { Component, type ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-brand-white">
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                Something went wrong
              </h2>
              <p className="text-brand-black/70 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <button onClick={() => window.location.reload()} className="btn-primary">
                Refresh Page
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
