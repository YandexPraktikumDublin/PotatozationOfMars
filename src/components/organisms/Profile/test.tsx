import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { Profile } from '.'

const mockStore = configureStore([])

describe('<Profile />', () => {
  let store: Store

  const initialState = {
    user: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <Profile />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Profile />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
