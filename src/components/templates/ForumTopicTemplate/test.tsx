import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ForumTopicTemplate } from '.'

describe('<ForumTopicTemplate />', () => {
  it('should renders correct <ForumTopicTemplate />', () => {
    const wrapper = shallow(<ForumTopicTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
