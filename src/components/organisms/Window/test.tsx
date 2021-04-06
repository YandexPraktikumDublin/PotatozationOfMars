import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Window } from '.'

describe('<Window />', () => {
  const children = 'Test children'

  it('should renders correct <Window />', () => {
    const wrapper = shallow(<Window>{children}</Window>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
