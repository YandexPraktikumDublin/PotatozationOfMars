import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { LeaderboardListItem } from '.'

describe('<LeaderboardListItem />', () => {
  const position = 1
  const login = 'IvanIvanov'
  const scores = 1023

  it('should renders correct <LeaderboardListItem />', () => {
    const wrapper = shallow(
      <LeaderboardListItem position={position} login={login} scores={scores} />
    )

    expect(wrapper.contains(position)).toBeTruthy()
    expect(wrapper.contains(login)).toBeTruthy()
    expect(wrapper.contains(scores)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
