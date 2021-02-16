import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { AuthForm } from '.'

describe('<AuthForm />', () => {
  it('should renders correct <AuthForm />', () => {
    const wrapper = shallow(<AuthForm />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
