import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Forum } from '.'

describe('<Forum />', () => {
  it('should renders correct <Forum />', () => {
    const wrapper = shallow(<Forum />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
