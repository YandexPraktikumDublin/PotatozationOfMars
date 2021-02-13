import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GameCanvas } from '.'

describe('<GameCanvas />', () => {
  it('should renders correct <GameCanvas />', () => {
    const wrapper = shallow(<GameCanvas />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
