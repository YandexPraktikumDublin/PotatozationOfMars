import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Modal } from '.'

describe('<Modal />', () => {
  const children = 'Test children'
  const toggleModal = jest.fn()

  it('should renders correct <Modal />', () => {
    const wrapper = shallow(<Modal toggleModal={toggleModal}>{children}</Modal>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
