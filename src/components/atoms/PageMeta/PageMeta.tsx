import React, { FC, memo, useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from '@config'

type TPageMetaProps = {
  title?: string
  description?: string
}

const PageMeta: FC<TPageMetaProps> = memo(
  ({ title, description }: TPageMetaProps) => {
    const pageTitle = useMemo(
      () => (title ? `${title} | ${SITE_TITLE}` : `${SITE_TITLE}`),
      [title]
    )

    const pageDescription = useMemo(() => description ?? SITE_DESCRIPTION, [
      description
    ])

    return (
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Helmet>
    )
  }
)

PageMeta.displayName = 'PageMeta'

export default PageMeta
