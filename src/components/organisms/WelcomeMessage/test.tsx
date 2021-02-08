import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { WelcomeMessage } from '.'

describe('<WelcomeMessage />', () => {
  it('should renders correct <WelcomeMessage />', () => {
    const wrapper = shallow(<WelcomeMessage />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
