import React, { FC, memo } from 'react'
import { WelcomeMessage } from '@components/organisms'

type TStartTemplateProps = {}

const StartTemplate: FC<TStartTemplateProps> = memo(() => <WelcomeMessage />)

StartTemplate.displayName = 'StartTemplate'

export default StartTemplate
