import { all, call, put, takeLatest } from 'redux-saga/effects'
import { axiosInstance } from '@api'
import { updateUserSuccess, updateUserFailure } from './actions'
import { UPDATE_USER_REQUEST } from './actionTypes'
import { IUpdateUserRequestPayload } from './types'

const changeUserData = (data: IUpdateUserRequestPayload) =>
  axiosInstance.put('user/profile', data)

function* updateUserSaga(data: Record<string, any>) {
  try {
    const response = yield call(changeUserData, data.payload)

    yield put(updateUserSuccess(response.data))
  } catch (error) {
    yield put(
      updateUserFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(UPDATE_USER_REQUEST, updateUserSaga)])
}

export default saga
