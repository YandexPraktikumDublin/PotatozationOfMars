import React from 'react'
import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ForumTopic } from '.'

describe('<ForumTopic />', () => {
  it('should renders correct <ForumTopic />', () => {
    const wrapper = mount(<ForumTopic />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
