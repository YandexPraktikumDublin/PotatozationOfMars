import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Navigation } from '.'

describe('<Navigation />', () => {
  it('should renders correct <Navigation />', () => {
    const wrapper = shallow(<Navigation />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
