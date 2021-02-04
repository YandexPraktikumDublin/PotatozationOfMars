import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { AuthTemplate } from '.'

describe('<AuthTemplate />', () => {
  it('should renders correct <AuthTemplate />', () => {
    const wrapper = shallow(<AuthTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
