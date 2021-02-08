import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { StartTemplate } from '.'

describe('<StartTemplate />', () => {
  it('should renders correct <StartTemplate />', () => {
    const wrapper = shallow(<StartTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
