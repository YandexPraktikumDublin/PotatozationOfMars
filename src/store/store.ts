import { configureStore } from './index'
import { isServer } from '@utils/misc'

const initialState = !isServer() ? window.__INITIAL_STATE__ : {}

declare global {
  interface Window {
    __INITIAL_STATE__: {}
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
  }
}

export const { store, history } = configureStore(initialState)
