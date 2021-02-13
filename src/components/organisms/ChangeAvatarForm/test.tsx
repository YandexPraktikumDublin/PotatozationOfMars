import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ChangeAvatarForm } from '.'

describe('<ChangeAvatarForm />', () => {
  const successCallback = jest.fn()

  it('should renders correct <ChangeAvatarForm />', () => {
    const wrapper = shallow(
      <ChangeAvatarForm successCallback={successCallback} />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
