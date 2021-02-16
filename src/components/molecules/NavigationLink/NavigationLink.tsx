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
      <img
        width="24"
        height="24"
        src={imageSrc}
        className="w-6 h-6"
        alt={title}
      />
    </Link>
  )
)

NavigationLink.displayName = 'NavigationLink'

export default NavigationLink
