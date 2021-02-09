import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Leaderboard } from '.'

describe('<Leaderboard />', () => {
  it('should renders correct <Leaderboard />', () => {
    const wrapper = shallow(<Leaderboard />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
