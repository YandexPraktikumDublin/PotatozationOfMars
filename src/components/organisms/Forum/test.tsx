import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { Forum } from '.'

const mockStore = configureStore([])

describe('<Forum />', () => {
  let store: Store

  const initialState = {
    topics: []
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <Forum />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Forum />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
