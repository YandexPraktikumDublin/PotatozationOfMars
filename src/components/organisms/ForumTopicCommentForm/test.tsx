import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { ForumTopicCommentForm } from '.'

const mockStore = configureStore([])

describe('<ForumTopicCommentForm />', () => {
  const topicId = 1

  let store: Store

  const initialState = {
    topic: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <ForumTopicCommentForm />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ForumTopicCommentForm topicId={topicId} />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
