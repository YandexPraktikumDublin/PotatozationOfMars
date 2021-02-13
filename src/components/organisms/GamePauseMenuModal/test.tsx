import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GamePauseMenuModal } from '.'

describe('<GamePauseMenuModal />', () => {
  const toggleModal = jest.fn()
  it('should renders correct <GamePauseMenuModal />', () => {
    const wrapper = shallow(<GamePauseMenuModal toggleModal={toggleModal} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
