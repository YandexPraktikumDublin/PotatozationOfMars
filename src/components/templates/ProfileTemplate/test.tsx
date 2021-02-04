import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfileTemplate } from '.'

describe('<ProfileTemplate />', () => {
  it('should renders correct <ProfileTemplate />', () => {
    const wrapper = shallow(<ProfileTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
