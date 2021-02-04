import React, { FC, memo } from 'react'

export type TProfileTemplateProps = {
  testContent: string
}

export const ProfileTemplate: FC<TProfileTemplateProps> = memo(
  ({ testContent }: TProfileTemplateProps) => <></>
)

ProfileTemplate.displayName = 'ProfileTemplate'

export default ProfileTemplate
