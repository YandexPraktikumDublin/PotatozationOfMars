import { all, call, put, takeLatest } from 'redux-saga/effects'
import { axiosInstance } from '@api'
import { updateAvatarSuccess, updateAvatarFailure } from './actions'
import { UPDATE_AVATAR_REQUEST } from './actionTypes'
import { IUpdateAvatarRequestPayload } from './types'

export const updateAvatar = (data: IUpdateAvatarRequestPayload) =>
  axiosInstance.put('user/profile/avatar', data.formData)

function* updateAvatarSaga(data: Record<string, any>) {
  try {
    const response = yield call(updateAvatar, data.payload)

    yield put(updateAvatarSuccess({ user: response.data }))
  } catch (error) {
    yield put(
      updateAvatarFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(UPDATE_AVATAR_REQUEST, updateAvatarSaga)])
}

export default saga
