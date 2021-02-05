import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GameTemplate } from '.'

describe('<GameTemplate />', () => {
  it('should renders correct <GameTemplate />', () => {
    const wrapper = shallow(<GameTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
