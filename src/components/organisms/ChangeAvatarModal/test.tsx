import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ChangeAvatarModal } from '.'

describe('<ChangeAvatarModal />', () => {
  const onSuccessAvatarUpdate = jest.fn()

  it('should renders correct <ChangeAvatarModal />', () => {
    const toggleModal = jest.fn()

    const wrapper = shallow(
      <ChangeAvatarModal
        toggleModal={toggleModal}
        onSuccessAvatarUpdate={onSuccessAvatarUpdate}
      />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
