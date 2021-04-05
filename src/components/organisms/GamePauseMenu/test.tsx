import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import configureStore from 'redux-mock-store'

import { GamePauseMenu } from '.'

describe('<GamePauseMenu />', () => {
  const mockStore = configureStore([])

  let store: Store

  const initialState = {
    game: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  const toggleModal = jest.fn()

  it('should renders correct <GamePauseMenu />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <GamePauseMenu toggleModal={toggleModal} />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
