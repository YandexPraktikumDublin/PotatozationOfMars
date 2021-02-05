import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Pause } from '.'

describe('<Pause />', () => {
  it('should renders correct <Pause />', () => {
    const wrapper = shallow(<Pause />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
