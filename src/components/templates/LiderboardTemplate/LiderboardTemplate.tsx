import React, { FC, memo } from 'react'

export type TLiderboardTemplateProps = {
  testContent: string;
}

export const LiderboardTemplate: FC<TLiderboardTemplateProps> = memo(({testContent}: TLiderboardTemplateProps) => <></>)

LiderboardTemplate.displayName = 'LiderboardTemplate'

export default LiderboardTemplate
