import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Error500Template } from '.'

describe('<Error500Template />', () => {
  it('should renders correct <Error500Template />', () => {
    const wrapper = shallow(<Error500Template />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
