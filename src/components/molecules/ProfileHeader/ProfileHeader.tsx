import React, { FC, memo, useState } from 'react'
import classNames from 'classnames'
import { ChangeAvatarModal } from '@components/organisms'
import { SERVER_URL } from '@config'
import { profile } from '@images'

type TProfileHeaderProps = {
  firstName?: string
  secondName?: string
  avatar?: string
  onSuccessAvatarUpdate: () => void
  className?: string
}

const ProfileHeader: FC<TProfileHeaderProps> = memo(
  ({
    firstName = '',
    secondName = '',
    avatar,
    onSuccessAvatarUpdate,
    className = ''
  }: TProfileHeaderProps) => {
    const [
      isShownAvatarChangeModal,
      setIsShownAvatarChangeModal
    ] = useState<boolean>(false)

    const avatarSrc = avatar ? `${SERVER_URL}/${avatar}` : profile

    const toggleModal = () => {
      setIsShownAvatarChangeModal((value) => !value)
    }

    return (
      <header className={classNames('text-center', className)}>
        <button className="group relative rounded-full border border-white outline-none overflow-hidden mx-auto mb-6">
          <img width="80" height="80" src={avatarSrc} alt="" />

          <div
            className="hidden group-hover:flex justify-center items-center absolute inset-0 bg-primary bg-opacity-50 text-white"
            onClick={toggleModal}
          >
            change
          </div>
        </button>
        <h1 className="font-medium">{`${firstName} ${secondName}`}</h1>

        {isShownAvatarChangeModal && (
          <ChangeAvatarModal
            toggleModal={toggleModal}
            onSuccessAvatarUpdate={onSuccessAvatarUpdate}
          />
        )}
      </header>
    )
  }
)

ProfileHeader.displayName = 'ProfileHeader'

export default ProfileHeader
