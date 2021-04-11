import { all, fork } from 'redux-saga/effects'
import userSaga from '@store/user/fetchUser/sagas'
import updateUserSaga from '@store/user/updateUser/sagas'
import updateAvatarSaga from '@store/user/updateAvatar/sagas'
import updatePassword from '@store/user/updatePassword/sagas'
import fetchIUserSaga from '@store/iuser/fetchIUser/sagas'
import createIUserSaga from '@store/iuser/createIUser/sagas'
import updateIUserSaga from '@store/iuser/updateIUser/sagas'
import updateIUserPasswordSaga from '@store/iuser/updateIUserPassword/sagas'
import signinIUserSaga from '@store/iuser/signinIUser/sagas'
import logoutIUserSaga from '@store/iuser/logoutIUser/sagas'
import signupSaga from '@store/signup/sagas'
import authSaga from '@store/auth/sagas'
import logoutSaga from '@store/logout/sagas'
import leaderboardSaga from '@store/leaderboard/fetchLeaderboard/sagas'
import updateLeaderboardSaga from '@store/leaderboard/updateLeaderboard/sagas'
import fetchTopicSaga from '@store/topic/fetchTopic/sagas'
import createTopicSaga from '@store/topic/createTopic/sagas'
import fetchTopicsSaga from '@store/topics/fetchTopics/sagas'
import fetchCommentSaga from '@store/comment/fetchComment/sagas'
import createCommentSaga from '@store/comment/createComment/sagas'
import fetchCommentsSaga from '@store/comments/fetchComments/sagas'
import fetchReactionSaga from '@store/reaction/fetchReaction/sagas'
import createReactionSaga from '@store/reaction/createReaction/sagas'
import deleteReactionSaga from '@store/reaction/deleteReaction/sagas'
import fetchReactionsSaga from '@store/reactions/fetchReactions/sagas'
import fetchThemesSaga from '@store/themes/fetchThemes/sagas'
import fetchUserSettingsSaga from '@store/userSettings/fetchUserSettings/sagas'
import createUserSettingsSaga from '@store/userSettings/createUserSettings/sagas'
import updateUserSettingsSaga from '@store/userSettings/updateUserSettings/sagas'

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(updateUserSaga),
    fork(updateAvatarSaga),
    fork(updatePassword),
    fork(fetchIUserSaga),
    fork(createIUserSaga),
    fork(updateIUserSaga),
    fork(updateIUserPasswordSaga),
    fork(signinIUserSaga),
    fork(logoutIUserSaga),
    fork(signupSaga),
    fork(authSaga),
    fork(logoutSaga),
    fork(leaderboardSaga),
    fork(updateLeaderboardSaga),
    fork(fetchTopicSaga),
    fork(createTopicSaga),
    fork(fetchTopicsSaga),
    fork(fetchCommentSaga),
    fork(createCommentSaga),
    fork(fetchCommentsSaga),
    fork(fetchReactionSaga),
    fork(createReactionSaga),
    fork(deleteReactionSaga),
    fork(fetchReactionsSaga),
    fork(fetchThemesSaga),
    fork(fetchUserSettingsSaga),
    fork(createUserSettingsSaga),
    fork(updateUserSettingsSaga)
  ])
}
