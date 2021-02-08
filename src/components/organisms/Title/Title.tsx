import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TTitleProps = {
  title: string
}

const Title: FC<TTitleProps> = memo(({ title }: TTitleProps) => {
  return (
    <h1 className={classNames('text-4xl mb-4', 'dark:text-white')}>{title}</h1>
  )
})

Title.displayName = 'Title'

export default Title
