import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ErrorTemplate } from '.'

describe('<ErrorTemplate />', () => {
  it('should renders correct <ErrorTemplate />', () => {
    const wrapper = shallow(<ErrorTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
