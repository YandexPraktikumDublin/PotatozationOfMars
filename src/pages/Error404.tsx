import React, { FC } from 'react'
import { withHeaderAndFooter } from '@hocs'
import { ErrorTemplate } from '@components/templates'

const Error404: FC = () => <ErrorTemplate title="404" />

export default withHeaderAndFooter(Error404)
