import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import { Store } from 'redux'

import { GameWindow } from '.'
import { Provider } from 'react-redux'

describe('<GameWindow />', () => {
  const mockStore = configureStore([])

  let store: Store

  const initialState = {
    game: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })
  it('should renders correct <GameWindow />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <GameWindow />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
