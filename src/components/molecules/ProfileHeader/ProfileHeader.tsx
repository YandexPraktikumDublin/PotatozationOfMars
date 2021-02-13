import React, { FC, memo, useState } from 'react'
import classNames from 'classnames'
import { ChangeAvatarModal } from '@components/organisms'
import { profile } from '@images'

type TProfileHeaderProps = {
  className?: string
  firstName: string
  secondName: string
  avatar: string | undefined
}

const ProfileHeader: FC<TProfileHeaderProps> = memo(
  ({ className, firstName, secondName, avatar }: TProfileHeaderProps) => {
    const [
      isShownAvatarChangeModal,
      setIsShownAvatarChangeModal
    ] = useState<boolean>(false)

    const toggleModal = () => {
      setIsShownAvatarChangeModal((value) => !value)
    }

    return (
      <header className={classNames('text-center', className)}>
        <button className="group relative rounded-full border border-white outline-none overflow-hidden mx-auto mb-6">
          <img
            width="80"
            height="80"
            src={`https://ya-praktikum.tech/${avatar}` || profile}
            alt=""
          />

          <div
            className="hidden group-hover:flex justify-center items-center absolute inset-0 bg-primary bg-opacity-50 text-white"
            onClick={() => setIsShownAvatarChangeModal(true)}
          >
            change
          </div>
        </button>
        <h1 className="font-medium">{`${firstName} ${secondName}`}</h1>

        {isShownAvatarChangeModal && (
          <ChangeAvatarModal toggleModal={toggleModal} />
        )}
      </header>
    )
  }
)

ProfileHeader.displayName = 'ProfileHeader'

export default ProfileHeader
