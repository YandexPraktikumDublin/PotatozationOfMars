import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { PATHS } from '@config'
import { hardRedirectTo } from '@utils/misc'
import { authFailure, authSuccess } from './actions'
import { AUTH_REQUEST } from './actionTypes'
import { IAuthRequestPayload } from '@store/auth/types'

const signin = (data: IAuthRequestPayload) =>
  getAxiosInstance().post('auth/signin', data)

function* authSaga(data: Record<string, any>) {
  try {
    const response = yield call(signin, data.payload)

    yield put(authSuccess(response.data))
    yield call(hardRedirectTo, PATHS.BASE)
  } catch (error) {
    yield put(
      authFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(AUTH_REQUEST, authSaga)])
}

export default saga
