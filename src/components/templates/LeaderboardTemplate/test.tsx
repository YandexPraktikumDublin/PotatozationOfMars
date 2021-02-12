import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { LeaderboardTemplate } from '.'

describe('<LeaderboardTemplate />', () => {
  it('should renders correct <LeaderboardTemplate />', () => {
    const wrapper = shallow(<LeaderboardTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
