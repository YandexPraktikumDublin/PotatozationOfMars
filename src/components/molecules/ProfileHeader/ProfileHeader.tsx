import React, { FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { ChangeAvatarModal } from '@components/organisms'
import { SERVER_URL } from '@config'
import { profile } from '@images'
import { useToggle } from '@hooks'
import { getUserSelector } from '@store/user/fetchUser/selectors'

type TProfileHeaderProps = {
  className?: string
}

const ProfileHeader: FC<TProfileHeaderProps> = memo(
  ({ className = '' }: TProfileHeaderProps) => {
    const [isShownAvatarChangeModal, toggleAvatarChangeModal] = useToggle(false)

    const user = useSelector(getUserSelector)
    const avatarSrc = user?.avatar ? `${SERVER_URL}/${user?.avatar}` : profile
    const name =
      user?.displayName || `${user?.firstName ?? ''} ${user?.secondName ?? ''}`

    useEffect(() => {
      if (isShownAvatarChangeModal) {
        toggleAvatarChangeModal()
      }
    }, [user?.avatar])

    return (
      <header className={classNames('text-center', className)}>
        <button className="group relative rounded-full border border-white outline-none overflow-hidden mx-auto mb-6">
          <img
            width="80"
            height="80"
            src={avatarSrc}
            className="w-20 h-20"
            alt=""
          />

          <div
            className="hidden group-hover:flex justify-center items-center absolute inset-0 bg-primary bg-opacity-50 text-white"
            onClick={toggleAvatarChangeModal}
          >
            change
          </div>
        </button>
        <h1 className="font-medium">{name}</h1>

        {isShownAvatarChangeModal && (
          <ChangeAvatarModal toggleModal={toggleAvatarChangeModal} />
        )}
      </header>
    )
  }
)

ProfileHeader.displayName = 'ProfileHeader'

export default ProfileHeader
