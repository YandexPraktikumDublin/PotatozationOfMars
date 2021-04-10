import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getAxiosInstance } from '@api'
import { INNER_API_V1_URL } from '@config'
import { fetchThemesFailure, fetchThemesSuccess } from './actions'
import { FETCH_THEMES_REQUEST } from './actionTypes'

const getThemes = () => getAxiosInstance(INNER_API_V1_URL).get('themes')

function* fetchThemesSaga() {
  try {
    const response = yield call(getThemes)

    yield put(fetchThemesSuccess({ themes: response.data }))
  } catch (error) {
    yield put(
      fetchThemesFailure({
        error: error?.message
      })
    )
  }
}

function* saga() {
  yield all([takeLatest(FETCH_THEMES_REQUEST, fetchThemesSaga)])
}

export default saga
