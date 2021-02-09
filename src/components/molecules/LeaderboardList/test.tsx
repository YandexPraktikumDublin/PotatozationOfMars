import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { LeaderboardList } from '.'

describe('<LeaderboardList />', () => {
  const children = 'Test children'

  it('should renders correct <LeaderboardList />', () => {
    const wrapper = shallow(<LeaderboardList>{children}</LeaderboardList>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
