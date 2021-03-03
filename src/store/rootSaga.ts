import { all, fork } from 'redux-saga/effects'
import userSaga from '@store/user/fetchUser/sagas'
import updateUserSaga from '@store/user/updateUser/sagas'
import updateAvatarSaga from '@store/user/updateAvatar/sagas'
import updatePassword from '@store/user/updatePassword/sagas'
import signupSaga from '@store/signup/sagas'
import authSaga from '@store/auth/sagas'
import logoutSaga from '@store/logout/sagas'

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(updateUserSaga),
    fork(updateAvatarSaga),
    fork(updatePassword),
    fork(signupSaga),
    fork(authSaga),
    fork(logoutSaga)
  ])
}
