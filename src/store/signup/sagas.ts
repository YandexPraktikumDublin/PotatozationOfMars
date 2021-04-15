import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { PATHS } from '@config'
import { hardRedirectTo } from '@utils/misc'
import { signupFailure, signupSuccess } from './actions'
import { SIGNUP_REQUEST } from './actionTypes'
import { ISignupRequestPayload } from './types'
import { createEnjoyerRequest } from '@store/enjoyer/createEnjoyer/actions'

const signup = (data: ISignupRequestPayload) =>
  getAxiosInstance().post('auth/signup', data)

function* signupSaga(data: Record<string, any>) {
  try {
    const response = yield call(signup, data.payload)
    yield put(signupSuccess(response.data))

    yield put(
      createEnjoyerRequest({
        login: data.payload.login,
        name: `${data.payload.first_name} ${data.payload.second_name}`,
        password: data.payload.password
      })
    )

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
