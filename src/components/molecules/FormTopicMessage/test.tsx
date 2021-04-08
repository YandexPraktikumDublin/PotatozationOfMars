import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { formatDate } from '@utils/misc'

import { FormTopicMessage } from '.'

describe('<FormTopicMessage />', () => {
  const topic = {
    id: 1,
    subject: 'New Games',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    userId: 1,
    user: {
      id: 1,
      login: 'IvanIvanov',
      name: 'Ivan Ivanov',
      createdAt: '01.12.20',
      updatedAt: '01.12.20'
    },
    createdAt: '01.12.20',
    updatedAt: '01.12.20',
    comments: []
  }

  it('should renders correct <FormTopicMessage />', () => {
    const wrapper = shallow(<FormTopicMessage topic={topic} />)

    expect(wrapper.contains(topic.content)).toBeTruthy()
    expect(wrapper.contains(topic.user.name)).toBeTruthy()
    expect(wrapper.contains(formatDate(topic.createdAt))).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
