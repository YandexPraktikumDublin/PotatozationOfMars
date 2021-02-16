import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Navigation } from './index'

describe('<Navigation />', () => {
  it('should renders correct <Navigation />', () => {
    const children = 'Test children'

    const wrapper = shallow(<Navigation>{children}</Navigation>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
