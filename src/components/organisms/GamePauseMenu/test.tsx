import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GamePauseMenu } from '.'

describe('<GamePauseMenu />', () => {
  const toggleModal = jest.fn()
  it('should renders correct <GamePauseMenu />', () => {
    const wrapper = shallow(<GamePauseMenu toggleModal={toggleModal} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
