import { all, fork } from 'redux-saga/effects'
import userSaga from '@store/user/sagas'
import signupSaga from '@store/signup/sagas'
import authSaga from '@store/auth/sagas'

export function* rootSaga() {
  yield all([fork(userSaga), fork(signupSaga), fork(authSaga)])
}
