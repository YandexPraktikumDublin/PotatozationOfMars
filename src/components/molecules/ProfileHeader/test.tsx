import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfileHeader } from '.'

describe('<ProfileHeader />', () => {
  it('should renders correct <ProfileHeader />', () => {
    const wrapper = shallow(<ProfileHeader />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from className prop', () => {
    const className = 'test-class-name'

    const wrapper = shallow(<ProfileHeader className={className} />)

    expect(wrapper.prop('className')).toMatch(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
