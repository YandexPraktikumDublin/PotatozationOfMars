import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Profile } from '.'

describe('<Profile />', () => {
  it('should renders correct <Profile />', () => {
    const wrapper = shallow(<Profile />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
