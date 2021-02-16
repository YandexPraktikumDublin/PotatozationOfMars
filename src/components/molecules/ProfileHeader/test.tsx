import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfileHeader } from '.'

describe('<ProfileHeader />', () => {
  const firstName = 'Test first name'
  const secondName = 'Test second name'
  const avatar = 'Test avatar'

  it('should renders correct <ProfileHeader />', () => {
    const onSuccessAvatarUpdate = jest.fn()

    const wrapper = shallow(
      <ProfileHeader
        firstName={firstName}
        secondName={secondName}
        avatar={avatar}
        onSuccessAvatarUpdate={onSuccessAvatarUpdate}
      />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from className prop', () => {
    const onSuccessAvatarUpdate = jest.fn()
    const className = 'test-class-name'

    const wrapper = shallow(
      <ProfileHeader
        firstName={firstName}
        secondName={secondName}
        avatar={avatar}
        onSuccessAvatarUpdate={onSuccessAvatarUpdate}
        className={className}
      />
    )

    expect(wrapper.prop('className')).toMatch(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
