import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TTitleProps = {}

const Title: FC<TTitleProps> = memo((props) => {
  return (
    <h1 className={classNames('text-4xl mb-6 font-medium', 'dark:text-white')}>
      {props.children}
    </h1>
  )
})

Title.displayName = 'Title'

export default Title
