import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { ForumTopicCommentActions } from '.'

const mockStore = configureStore([])

describe('<ForumTopicCommentActions />', () => {
  const comment = {
    id: 1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    userId: 1,
    user: {
      id: 1,
      login: 'IvanIvanov',
      name: 'Ivan Ivanov',
      createdAt: '01.12.20',
      updatedAt: '01.12.20'
    },
    topicId: 1,
    reactions: [
      {
        id: 1,
        content: '😂',
        userId: 1,
        user: {
          id: 1,
          login: 'IvanIvanov',
          name: 'Ivan Ivanov',
          createdAt: '01.12.20',
          updatedAt: '01.12.20'
        },
        commentId: 2,
        createdAt: '01.12.20',
        updatedAt: '01.12.20'
      }
    ],
    createdAt: '01.12.20',
    updatedAt: '01.12.20'
  }

  let store: Store

  const initialState = {
    comment
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <ForumTopicCommentActions />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ForumTopicCommentActions comment={comment} />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
