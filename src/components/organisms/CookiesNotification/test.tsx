import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CookiesNotification } from '.'

describe('<CookiesNotification />', () => {
  it('should renders correct <CookiesNotification />', () => {
    const wrapper = shallow(<CookiesNotification />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
