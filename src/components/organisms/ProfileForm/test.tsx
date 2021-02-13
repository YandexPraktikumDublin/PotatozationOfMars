import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfileForm } from '.'

describe('<ProfileForm />', () => {
  const userData = {}
  const successCallback = jest.fn()

  it('should renders correct <ProfileForm />', () => {
    const wrapper = shallow(
      <ProfileForm userData={userData} successCallback={successCallback} />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
