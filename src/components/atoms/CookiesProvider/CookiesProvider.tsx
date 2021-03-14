import React, { FC, memo } from 'react'
import { CookiesContext } from '@components/atoms'
import { ClientManager } from '@cookies'

type TCookiesProviderProps = {
  manager?: any
  children: React.ReactChild
}

const CookiesProvider: FC<TCookiesProviderProps> = memo(
  ({ manager, children }: TCookiesProviderProps) => {
    if (!manager) {
      manager = new ClientManager()
    }
    return (
      <CookiesContext.Provider value={manager}>
        {children}
      </CookiesContext.Provider>
    )
  }
)

CookiesProvider.displayName = 'CookiesProvider'

export default CookiesProvider
