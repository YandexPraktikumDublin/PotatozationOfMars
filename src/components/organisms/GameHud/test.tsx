import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GameHud } from '.'

describe('<GameHud />', () => {
  it('should renders correct <GameHud />', () => {
    const wrapper = shallow(<GameHud />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
