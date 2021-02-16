import React from 'react'
import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { WelcomeMessage } from '.'

describe('<WelcomeMessage />', () => {
  it('should renders correct <WelcomeMessage />', () => {
    const wrapper = mount(<WelcomeMessage />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
