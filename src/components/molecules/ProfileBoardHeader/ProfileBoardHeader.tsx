import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { profile } from '@images'
import { ProfileBoardHeaderEditButton } from '@components/atoms'

type TProfileBoardHeaderProps = {
  className?: string
}

const ProfileBoardHeader: FC<TProfileBoardHeaderProps> = memo(
  ({ className }: TProfileBoardHeaderProps) => {
    const handleEditButtonClick = () => {}

    const handleChangeAvatarButtonClick = () => {}

    return (
      <header className={classNames('relative text-center', className)}>
        <ProfileBoardHeaderEditButton onClick={handleEditButtonClick} />
        <button className="group relative rounded-full border border-white outline-none overflow-hidden mx-auto mb-6">
          <img width="80" height="80" src={profile} alt="" />

          <div
            className="hidden group-hover:flex justify-center items-center absolute inset-0 bg-primary bg-opacity-50 text-white"
            onClick={handleChangeAvatarButtonClick}
          >
            change
          </div>
        </button>
        <h1 className="font-medium">Ivan Ivanov</h1>
      </header>
    )
  }
)

ProfileBoardHeader.displayName = 'ProfileBoardHeader'

export default ProfileBoardHeader
