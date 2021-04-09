import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ForumTopicChildComment } from '.'

describe('<ForumTopicChildComment />', () => {
  const childComment = {
    id: 2,
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
    parentId: 1,
    hierarchyLevel: 1,
    reactions: [
      {
        id: 2,
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

  it('should renders correct <ForumTopicChildComment />', () => {
    const wrapper = shallow(
      <ForumTopicChildComment childComment={childComment} />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
