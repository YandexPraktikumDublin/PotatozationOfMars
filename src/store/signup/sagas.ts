import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL, PATHS } from '@config'
import { hardRedirectTo } from '@utils/misc'
import { signupFailure, signupSuccess } from './actions'
import { SIGNUP_REQUEST } from './actionTypes'
import { ISignupRequestPayload } from './types'

const signup = (data: ISignupRequestPayload) =>
  getAxiosInstance().post('auth/signup', data)

const innerSignup = (data: Record<string, any>) =>
  getAxiosInstance(INNER_API_V1_URL).post('signup', data)

function* signupSaga(data: Record<string, any>) {
  try {
    const response = yield call(signup, data.payload)

    yield put(signupSuccess(response.data))
    yield call(innerSignup, {
      login: data.payload.login,
      name: `${data.payload.first_name} ${data.payload.second_name}`
    })
    yield call(hardRedirectTo, PATHS.BASE)
  } catch (error) {
    yield put(
      signupFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(SIGNUP_REQUEST, signupSaga)])
}

export default saga
