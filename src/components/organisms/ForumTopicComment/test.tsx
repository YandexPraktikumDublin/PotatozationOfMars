import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { formatDate } from '@utils/misc'

import { ForumTopicComment } from './index'

describe('<ForumTopicComment />', () => {
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

  it('should renders correct <ForumTopicComment />', () => {
    const wrapper = shallow(<ForumTopicComment comment={comment} />)

    expect(wrapper.contains(comment.content)).toBeTruthy()
    expect(wrapper.contains(comment.user.name)).toBeTruthy()
    expect(wrapper.contains(formatDate(comment.createdAt))).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
