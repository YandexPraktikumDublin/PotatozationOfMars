import React, { FC, memo } from 'react'

type TFooterProps = {}

const Footer: FC<TFooterProps> = memo(() => (
  <footer className="mt-auto mb-0 p-4" />
))

Footer.displayName = 'Footer'

export default Footer
