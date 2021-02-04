import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { LiderboardTemplate } from '.'

describe('<LiderboardTemplate />', () => {
  it('should renders correct <LiderboardTemplate />', () => {
    const wrapper = shallow(<LiderboardTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
