import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Title } from '.'

describe('<Title />', () => {
  it('should renders correct <Title />', () => {
    const wrapper = shallow(<Title />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
