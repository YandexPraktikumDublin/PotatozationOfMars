import { Store } from 'redux'
import { SagaMiddleware } from '@redux-saga/core'

export interface IAppStore extends Store {
  runSaga: SagaMiddleware['run']
  close: () => void
}
