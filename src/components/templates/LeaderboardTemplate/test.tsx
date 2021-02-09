import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { LeaderboardTemplate } from '.'

describe('<LeaderboardTemplate />', () => {
  const title = 'Test title'

  it('should renders correct <LeaderboardTemplate />', () => {
    const wrapper = shallow(<LeaderboardTemplate title={title} />)

    expect(wrapper.contains(title)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
