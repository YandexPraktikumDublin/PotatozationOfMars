import React, { FC, memo } from 'react'
import { Pause, TumblerTheme } from '@components/organisms'
import { Navigation } from '@components/molecules'

type THeaderProps = {}

const Header: FC<THeaderProps> = memo(() => (
  <header className='p-2 items-center w-full flex'>
    <div className='my-auto'>
      <Pause />
    </div>
    <div className='flex ml-auto mr-0'>
      <Navigation />
      <TumblerTheme />
    </div>
  </header>
))

Header.displayName = 'Header'

export default Header
