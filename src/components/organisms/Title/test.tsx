import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Title } from '.'

describe('<Title />', () => {
  const children = 'Test children'

  it('should renders correct <Title />', () => {
    const wrapper = shallow(<Title>{children}</Title>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
