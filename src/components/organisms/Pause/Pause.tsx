import React, { FC, memo } from 'react'
import { home } from '@images'

type TPauseProps = {}

const Pause: FC<TPauseProps> = memo(() => (
  <button className="ml-4">
    <img src={home} alt="Back home" />
  </button>
))

Pause.displayName = 'Pause'

export default Pause
