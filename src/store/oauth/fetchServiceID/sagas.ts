import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import {
  fetchServiceIDFailure,
  fetchServiceIDSuccess
} from '@store/oauth/fetchServiceID/actions'
import { hardRedirectTo } from '@utils/misc'
import { YANDEX_OAUTH_REDIRECT_URL } from '@config'
import { FETCH_SERVICE_ID_REQUEST } from '@store/oauth/fetchServiceID/actionTypes'

const getServiceID = () => getAxiosInstance().get('oauth/yandex/service-id')

function* fetchServiceIDSaga() {
  try {
    const response = yield call(getServiceID)

    yield put(fetchServiceIDSuccess(response.data))
    yield call(
      hardRedirectTo,
      `${YANDEX_OAUTH_REDIRECT_URL}?response_type=code&client_id=${response.data.service_id}`
    )
  } catch (error) {
    yield put(
      fetchServiceIDFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_SERVICE_ID_REQUEST, fetchServiceIDSaga)])
}

export default saga
