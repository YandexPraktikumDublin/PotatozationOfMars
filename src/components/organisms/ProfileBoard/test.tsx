import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfileBoard } from '.'

describe('<ProfileBoard />', () => {
  it('should renders correct <ProfileBoard />', () => {
    const wrapper = shallow(<ProfileBoard />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
