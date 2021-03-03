import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GamePauseMenuDisplay } from '.'

describe('<GamePauseMenuDisplay />', () => {
  it('should renders correct <GamePauseMenuDisplay />', () => {
    const toggleModal = jest.fn()
    const isGamePaused = true

    const wrapper = shallow(
      <GamePauseMenuDisplay
        isGamePaused={isGamePaused}
        toggleModal={toggleModal}
      />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
