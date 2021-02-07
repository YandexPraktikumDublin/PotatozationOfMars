import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'

type TNavigationLinkProps = {
  title: string
  href: string
  imageSrc: string
}

const NavigationLink: FC<TNavigationLinkProps> = memo(
  ({ title, href, imageSrc }: TNavigationLinkProps) => (
    <Link to={href} title={title}>
      <img width="25" height="25" src={imageSrc} alt={title} />
    </Link>
  )
)

NavigationLink.displayName = 'NavigationLink'

export default NavigationLink
