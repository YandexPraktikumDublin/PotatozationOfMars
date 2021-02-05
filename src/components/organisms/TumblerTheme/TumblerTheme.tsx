import React, { FC, memo } from 'react'
import { tumbler } from '@images'

type TTumblerThemeProps = {}

const TumblerTheme: FC<TTumblerThemeProps> = memo(() => (
  <button className='my-auto mr-4'>
    <img src={ tumbler } alt=""/>
  </button>
  )
)

TumblerTheme.displayName = 'TumblerTheme'

export default TumblerTheme
