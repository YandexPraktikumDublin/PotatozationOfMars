import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SignUpForm } from '.'

describe('<SignUpForm />', () => {
  it('should renders correct <SignUpForm />', () => {
    const wrapper = shallow(<SignUpForm />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
