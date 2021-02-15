import React, { FC } from 'react'
import { withHeaderAndFooter } from '@hocs'
import { StartTemplate } from '@components/templates'

const Start: FC = () => <StartTemplate />

export default withHeaderAndFooter(Start)
