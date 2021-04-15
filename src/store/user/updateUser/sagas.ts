import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { updateUserSuccess, updateUserFailure } from './actions'
import { UPDATE_USER_REQUEST } from './actionTypes'
import { IUpdateUserRequestPayload } from './types'
import { updateEnjoyerRequest } from '@store/enjoyer/updateEnjoyer/actions'

const changeUserData = (data: IUpdateUserRequestPayload) =>
  getAxiosInstance().put('user/profile', data)

function* updateUserSaga(data: Record<string, any>) {
  try {
    const response = yield call(changeUserData, data.payload)
    yield put(updateUserSuccess({ user: response.data }))

    yield put(
      updateEnjoyerRequest({
        login: data.payload.login,
        name:
          data.payload.display_name ??
          `${data.payload.first_name} ${data.payload.second_name}`
      })
    )
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
