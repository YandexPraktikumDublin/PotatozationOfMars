import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FormLink } from '.'

describe('<FormLink />', () => {
  it('should renders correct <FormLink />', () => {
    const wrapper = shallow(<FormLink text="test" path="test" />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
