import { call, all } from 'redux-saga/effects'
import { authSaga } from './auth/auth.saga'
import { postsSaga } from './posts/posts.saga'
import { votesSaga } from './votes/votes.saga'
import { subReaditSaga } from './sub-readit/sub-readit.saga'

export default function* rootSaga() {
  yield all([
    call(authSaga),
    call(postsSaga),
    call(votesSaga),
    call(subReaditSaga)
  ])
}