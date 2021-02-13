import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ModalBackdrop } from '.'

describe('<ModalBackdrop />', () => {
  const children = 'Test children'

  it('should renders correct <ModalBackdrop />', () => {
    const wrapper = shallow(<ModalBackdrop>{children}</ModalBackdrop>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
