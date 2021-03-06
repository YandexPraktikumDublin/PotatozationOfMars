import React, { FC, memo } from 'react'

type TNavigationButtonProps = {
  title: string
  onClick: () => void
  imageSrc: string
  className?: string
}

const NavigationButton: FC<TNavigationButtonProps> = memo(
  ({ title, onClick, imageSrc, className = '' }: TNavigationButtonProps) => (
    <button className={className} title={title} onClick={onClick}>
      <img
        width="24"
        height="24"
        src={imageSrc}
        className="w-6 h-6"
        alt={title}
      />
    </button>
  )
)

NavigationButton.displayName = 'NavigationButton'

export default NavigationButton
