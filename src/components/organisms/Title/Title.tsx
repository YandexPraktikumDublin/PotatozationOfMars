import React, { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'

type TTitleProps = {
  children: ReactNode
}

const Title: FC<TTitleProps> = memo(({ children }: TTitleProps) => {
  return (
    <h1 className={classNames('text-4xl mb-6 font-medium', 'dark:text-white')}>
      {children}
    </h1>
  )
})

Title.displayName = 'Title'

export default Title
