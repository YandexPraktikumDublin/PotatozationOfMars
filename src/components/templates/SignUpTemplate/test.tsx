import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SignUpTemplate } from '.'

describe('<SignUpTemplate />', () => {
  it('should renders correct <SignUpTemplate />', () => {
    const wrapper = shallow(<SignUpTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
