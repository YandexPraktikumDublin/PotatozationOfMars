import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { createEnjoyerSuccess, createEnjoyerFailure } from './actions'
import { CREATE_ENJOYER_REQUEST } from './actionTypes'
import { ICreateEnjoyerRequestPayload } from './types'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'

export const createEnjoyer = (data: ICreateEnjoyerRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).post(
    'signup',
    data
  )

function* createEnjoyerSaga(data: Record<string, any>) {
  try {
    const response = yield call(createEnjoyer, data.payload)

    yield put(createEnjoyerSuccess({ enjoyer: response.data }))
  } catch (error) {
    yield put(
      createEnjoyerFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(CREATE_ENJOYER_REQUEST, createEnjoyerSaga)])
}

export default saga
