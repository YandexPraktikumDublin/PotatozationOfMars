import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GameHud } from '.'

describe('<GameHud />', () => {
  it('should renders correct <GameHud />', () => {
    const string = ''
    const number = 0
    const wrapper = shallow(
      <GameHud title={string} imageSrc={string} value={number} />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
