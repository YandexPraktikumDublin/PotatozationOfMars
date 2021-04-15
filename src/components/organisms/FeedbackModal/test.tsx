import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FeedbackModal } from '.'

describe('<FeedbackModal />', () => {
  it('should renders correct <FeedbackModal />', () => {
    const toggleModal = jest.fn()

    const wrapper = shallow(<FeedbackModal toggleModal={toggleModal} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
