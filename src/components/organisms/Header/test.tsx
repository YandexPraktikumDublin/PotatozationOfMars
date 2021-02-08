import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Header } from '.'

describe('<Header />', () => {
  it('should renders correct <Header />', () => {
    const wrapper = shallow(<Header />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
