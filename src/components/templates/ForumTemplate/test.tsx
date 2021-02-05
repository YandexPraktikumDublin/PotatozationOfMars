import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ForumTemplate } from '.'

describe('<ForumTemplate />', () => {
  it('should renders correct <ForumTemplate />', () => {
    const wrapper = shallow(<ForumTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
