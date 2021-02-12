import React, { FC, memo } from 'react'
import { Profile, Window } from '@components/organisms'

type TProfileTemplateProps = {}

const ProfileTemplate: FC<TProfileTemplateProps> = memo(() => (
  <div className="w-full max-w-2xl">
    <Window>
      <Profile />
    </Window>
  </div>
))

ProfileTemplate.displayName = 'ProfileTemplate'

export default ProfileTemplate
