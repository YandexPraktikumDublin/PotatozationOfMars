import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CreateTopicModal } from '.'

describe('<CreateTopicModal />', () => {
  const toggleModal = jest.fn()

  it('should renders correct <CreateTopicModal />', () => {
    const wrapper = shallow(<CreateTopicModal toggleModal={toggleModal} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
