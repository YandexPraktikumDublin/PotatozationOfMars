import React, { FC, memo } from 'react'
import { feedback } from '@images'

type TFooterProps = {}

const Footer: FC<TFooterProps> = memo(() => (
  <footer className="p-2 items-center flex mt-auto">
    <button className="ml-auto mr-4">
      <img src={feedback} alt="" />
    </button>
  </footer>
))

Footer.displayName = 'Footer'

export default Footer
