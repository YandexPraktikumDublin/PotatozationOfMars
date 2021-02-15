import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ChangeAvatarForm } from '.'

describe('<ChangeAvatarForm />', () => {
  it('should renders correct <ChangeAvatarForm />', () => {
    const successCallback = jest.fn()

    const wrapper = shallow(
      <ChangeAvatarForm successCallback={successCallback} />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
