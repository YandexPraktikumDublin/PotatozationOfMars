import React, { FC, memo } from 'react'
import Helmet from 'react-helmet'
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from '@config'

type TPageMetaProps = {
  title?: string
  description?: string
}

const PageMeta: FC<TPageMetaProps> = memo(
  ({ title, description }: TPageMetaProps) => {
    return (
      <Helmet>
        <title>
          {title ? `${title} | ${DEFAULT_TITLE}` : `${DEFAULT_TITLE}`}
        </title>
        <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      </Helmet>
    )
  }
)

PageMeta.displayName = 'PageMeta'

export default PageMeta
