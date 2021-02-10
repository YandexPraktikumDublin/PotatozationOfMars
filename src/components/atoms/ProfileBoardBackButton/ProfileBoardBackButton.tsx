import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TProfileBoardBackButtonProps = {
  onClick: () => void
}

const ProfileBoardBackButton: FC<TProfileBoardBackButtonProps> = memo(
  ({ onClick }: TProfileBoardBackButtonProps) => (
    <button className="absolute top-0 left-0" onClick={onClick}>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          className={classNames('fill-primary', 'dark:fill-white')}
          d="M19.377 9.44H2.042l5.186-5.166a.622.622 0 10-.881-.881L.18 9.559a.63.63 0 000 .881l6.167 6.167a.622.622 0 10.88-.88l-5.185-5.041h17.335a.623.623 0 000-1.246z"
        />
      </svg>
    </button>
  )
)

ProfileBoardBackButton.displayName = 'ProfileBoardBackButton'

export default ProfileBoardBackButton
