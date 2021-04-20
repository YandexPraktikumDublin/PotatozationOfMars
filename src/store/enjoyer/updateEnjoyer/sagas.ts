import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { updateEnjoyerSuccess, updateEnjoyerFailure } from './actions'
import { UPDATE_ENJOYER_REQUEST } from './actionTypes'
import { IUpdateEnjoyerRequestPayload } from './types'
import { INNER_API_V1_URL, INNER_SERVER_API_V1_URL } from '@config'

const updateEnjoyer = (data: IUpdateEnjoyerRequestPayload) =>
  getAxiosInstance(INNER_API_V1_URL, INNER_SERVER_API_V1_URL).put(
    'enjoyer',
    data
  )

function* updateEnjoyerSaga(data: Record<string, any>) {
  try {
    const response = yield call(updateEnjoyer, data.payload)

    yield put(updateEnjoyerSuccess({ enjoyer: response.data }))
  } catch (error) {
    yield put(
      updateEnjoyerFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(UPDATE_ENJOYER_REQUEST, updateEnjoyerSaga)])
}

export default saga
