import { all, fork } from 'redux-saga/effects'
import userSaga from '@store/user/fetchUser/sagas'
import updateUserSaga from '@store/user/updateUser/sagas'
import updateAvatarSaga from '@store/user/updateAvatar/sagas'
import updatePassword from '@store/user/updatePassword/sagas'
import fetchEnjoyerSaga from '@store/enjoyer/fetchEnjoyer/sagas'
import createEnjoyerSaga from '@store/enjoyer/createEnjoyer/sagas'
import updateEnjoyerSaga from '@store/enjoyer/updateEnjoyer/sagas'
import updateEnjoyerPasswordSaga from '@store/enjoyer/updateEnjoyerPassword/sagas'
import signinEnjoyerSaga from '@store/enjoyer/signinEnjoyer/sagas'
import logoutEnjoyerSaga from '@store/enjoyer/logoutEnjoyer/sagas'
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
import fetchEnjoyerSettingsSaga from '@store/enjoyerSettings/fetchEnjoyerSettings/sagas'
import createEnjoyerSettingsSaga from '@store/enjoyerSettings/createEnjoyerSettings/sagas'
import updateEnjoyerSettingsSaga from '@store/enjoyerSettings/updateEnjoyerSettings/sagas'
import createFeedbackSaga from '@store/feedback/createFeedback/sagas'

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(updateUserSaga),
    fork(updateAvatarSaga),
    fork(updatePassword),
    fork(fetchEnjoyerSaga),
    fork(createEnjoyerSaga),
    fork(updateEnjoyerSaga),
    fork(updateEnjoyerPasswordSaga),
    fork(signinEnjoyerSaga),
    fork(logoutEnjoyerSaga),
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
    fork(fetchEnjoyerSettingsSaga),
    fork(createEnjoyerSettingsSaga),
    fork(updateEnjoyerSettingsSaga),
    fork(createFeedbackSaga)
  ])
}
