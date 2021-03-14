import React, { Component, ReactNode } from 'react'
import { CookiesContext } from '@components/atoms'

type ComposedComponentType = {
  children?: ReactNode
  cookies: {
    [key: string]: string
  }
  setCookie: (name: string, value?: string, days?: number) => void
}

export default function withCookies(
  ComposedComponent: React.FC<ComposedComponentType>
) {
  const name = ComposedComponent.displayName || ComposedComponent.name

  return class extends Component {
    static displayName = `withCookies(${name})`

    render() {
      return (
        <CookiesContext.Consumer>
          {(manager) => (
            <ComposedComponent
              cookies={manager.getAll()}
              setCookie={manager.set.bind(manager)}
              {...this.props}
            />
          )}
        </CookiesContext.Consumer>
      )
    }
  }
}
