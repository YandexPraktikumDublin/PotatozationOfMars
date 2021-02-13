import React, { FC, ButtonHTMLAttributes, memo } from 'react'
import classNames from 'classnames'

type TButtonProps = {
  isFullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<TButtonProps> = memo(
  ({ isFullWidth = true, className = '', ...props }: TButtonProps) => (
    <button
      className={classNames(
        'inline-block font-medium text-center uppercase border rounded py-2 px-4 mb-4',
        'text-primary border-primary',
        'hover:text-white hover:border-white hover:bg-primary',
        'dark:text-white dark:border-white',
        'dark:hover:text-primary dark:hover:border-primary dark:hover:bg-white',
        className,
        { 'w-full': isFullWidth }
      )}
      {...props}
    />
  )
)

Button.displayName = 'Button'

export default Button
