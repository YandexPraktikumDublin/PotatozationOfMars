import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GamePauseMenuRange } from '.'

describe('<GamePauseMenuRange />', () => {
  it('should renders correct <GamePauseMenuRange />', () => {
    const mockFn = jest.fn()
    const mockText = 'test'
    const mockValue = 0
    const wrapper = shallow(
      <GamePauseMenuRange
        decrease={mockFn}
        increase={mockFn}
        text={mockText}
        value={mockValue}
      />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
