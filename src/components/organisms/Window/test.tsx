import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Window } from '.'

describe('<Window />', () => {
  it('should renders correct <Window />', () => {
    const wrapper = shallow(<Window />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
