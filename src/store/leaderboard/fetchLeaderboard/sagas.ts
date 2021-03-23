import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { fetchLeaderboardFailure, fetchLeaderboardSuccess } from './actions'
import { FETCH_LEADERBOARD_REQUEST } from './actionTypes'
import { IFetchLeaderboardRequestPayload } from './types'
import { RATING_FIELD_NAME, RATING_LIMIT } from '@config'

const getLeaderboard = (data: IFetchLeaderboardRequestPayload) =>
  getAxiosInstance().post('leaderboard/all', data)

function* fetchLeaderboardSaga(data: Record<string, any>) {
  try {
    const response = yield call(getLeaderboard, {
      ratingFieldName: RATING_FIELD_NAME,
      limit: RATING_LIMIT,
      ...data.payload
    })

    yield put(fetchLeaderboardSuccess({ leaderboard: response.data }))
  } catch (error) {
    yield put(
      fetchLeaderboardFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_LEADERBOARD_REQUEST, fetchLeaderboardSaga)])
}

export default saga
