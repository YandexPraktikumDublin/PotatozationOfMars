import React, { FC, memo } from 'react'

type TNavigationButtonProps = {
  title: string
  onClick: () => void
  imageSrc: string
}

const NavigationButton: FC<TNavigationButtonProps> = memo(
  ({ title, onClick, imageSrc }: TNavigationButtonProps) => (
    <button title={title} onClick={onClick}>
      <img width="25" height="25" src={imageSrc} alt={title} />
    </button>
  )
)

NavigationButton.displayName = 'NavigationButton'

export default NavigationButton
