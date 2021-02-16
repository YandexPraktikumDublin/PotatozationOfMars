import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfilePasswordForm } from '.'

describe('<ProfilePasswordForm />', () => {
  it('should renders correct <ProfilePasswordForm />', () => {
    const successCallback = jest.fn()

    const wrapper = shallow(
      <ProfilePasswordForm successCallback={successCallback} />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
