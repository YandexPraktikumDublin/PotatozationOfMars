import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Error404Template } from '.'

describe('<Error404Template />', () => {
  it('should renders correct <Error404Template />', () => {
    const wrapper = shallow(<Error404Template />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
