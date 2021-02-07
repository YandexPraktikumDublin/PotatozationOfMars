import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Popup } from '.'

describe('<Popup />', () => {
  it('should renders correct <Popup />', () => {
    const wrapper = shallow(<Popup />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
