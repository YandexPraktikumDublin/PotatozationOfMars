import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ChangeAvatarModal } from '.'

describe('<ChangeAvatarModal />', () => {
  const toggleModal = jest.fn()

  it('should renders correct <ChangeAvatarModal />', () => {
    const wrapper = shallow(<ChangeAvatarModal toggleModal={toggleModal} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
