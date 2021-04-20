import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { signinEnjoyerSuccess, signinEnjoyerFailure } from './actions'
import { SIGNIN_ENJOYER_REQUEST } from './actionTypes'
import { ISigninEnjoyerRequestPayload } from './types'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'

export const signinEnjoyer = (data: ISigninEnjoyerRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).post(
    'signin',
    data
  )

function* signinEnjoyerSaga(data: Record<string, any>) {
  try {
    const response = yield call(signinEnjoyer, data.payload)

    yield put(signinEnjoyerSuccess({ enjoyer: response.data }))
  } catch (error) {
    yield put(
      signinEnjoyerFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(SIGNIN_ENJOYER_REQUEST, signinEnjoyerSaga)])
}

export default saga
