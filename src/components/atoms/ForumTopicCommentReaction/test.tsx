import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ForumTopicCommentReaction } from '.'

describe('<ForumTopicCommentReaction />', () => {
  const content = '😂'

  const reactions = [
    {
      id: 1,
      content: '😂',
      enjoyerId: 1,
      enjoyer: {
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
  ]

  it('should renders correct <ForumTopicCommentReaction />', () => {
    const handleClick = jest.fn()

    const wrapper = shallow(
      <ForumTopicCommentReaction
        content={content}
        reactions={reactions}
        handleClick={handleClick}
      />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
