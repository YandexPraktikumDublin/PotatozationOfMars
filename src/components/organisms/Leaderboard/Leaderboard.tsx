import React, { FC, memo, useState, useEffect } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { NameValueListItem } from '@components/atoms'
import { List } from '@components/molecules'
import { getLeaderboardSelector } from '@store/leaderboard/fetchLeaderboard/selectors'
import { fetchLeaderboardRequest } from '@store/leaderboard/fetchLeaderboard/actions'
import { ILeader } from '@types'

type TLeaderboardProps = {}

const Leaderboard: FC<TLeaderboardProps> = memo(() => {
  const [cursor] = useState(0)

  const dispatch = useDispatch()
  const leaderboard = useSelector(getLeaderboardSelector)

  useEffect(() => {
    if (leaderboard.length === 0) {
      dispatch(fetchLeaderboardRequest({ cursor }))
    }
  }, [])

  return (
    <div className={classNames('text-primary', 'dark:text-white')}>
      <List>
        {leaderboard?.map((leader: ILeader, index) => (
          <NameValueListItem
            key={leader?.data?.potatozationOfMarsUserId}
            name={`${index + 1}. ${leader?.data?.potatozationOfMarsUserLogin}`}
            value={leader?.data?.potatozationOfMarsScores}
          />
        ))}
      </List>
    </div>
  )
})

Leaderboard.displayName = 'Leaderboard'

export default Leaderboard
