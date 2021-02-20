import { all, fork } from 'redux-saga/effects'
import userSaga from '@store/user/sagas'

export function* rootSaga() {
  yield all([fork(userSaga)])
}
