import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { StartTemplate } from '@components/templates'

const Start: FC = () => <StartTemplate />

export default withAuth(withHeaderAndFooter(Start))
