import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { TumblerTheme } from '.'

describe('<TumblerTheme />', () => {
  it('should renders correct <TumblerTheme />', () => {
    const wrapper = shallow(<TumblerTheme />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
