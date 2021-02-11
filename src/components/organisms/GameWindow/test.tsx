import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GameWindow } from '.'

describe('<GameWindow />', () => {
  it('should renders correct <GameWindow />', () => {
    const wrapper = shallow(<GameWindow />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
