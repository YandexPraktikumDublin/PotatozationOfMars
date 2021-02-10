import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfileBoardHeader } from '.'

describe('<ProfileBoardHeader />', () => {
  it('should renders correct <ProfileBoardHeader />', () => {
    const wrapper = shallow(<ProfileBoardHeader />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from className prop', () => {
    const className = 'test-class-name'

    const wrapper = shallow(<ProfileBoardHeader className={className} />)

    expect(wrapper.prop('className')).toMatch(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
