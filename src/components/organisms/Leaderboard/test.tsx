import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { Leaderboard } from '.'

const mockStore = configureStore([])

describe('<Leaderboard />', () => {
  let store: Store

  const initialState = {
    leaderboard: []
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <Leaderboard />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Leaderboard />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
