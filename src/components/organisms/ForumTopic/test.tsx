import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { ForumTopic } from '.'

const mockStore = configureStore([])

describe('<ForumTopic />', () => {
  let store: Store

  const initialState = {
    topic: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <ForumTopic />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ForumTopic />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
