import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Error500 } from '@pages'

type TErrorBoundaryProps = {
  children: ReactNode
}

type TErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends Component<
  TErrorBoundaryProps,
  TErrorBoundaryState
> {
  public state: TErrorBoundaryState = {
    hasError: false
  }

  public static getDerivedStateFromError(): TErrorBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <Error500 />
    }

    return this.props.children
  }
}

export default ErrorBoundary
