import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FormLink } from '.'

describe('<FormLink />', () => {
  const children = 'Test children'
  const path = '/test'

  it('should renders correct <FormLink />', () => {
    const wrapper = shallow(<FormLink path={path}>{children}</FormLink>)

    expect(wrapper.contains(children)).toBeTruthy()
    expect(wrapper.prop('to')).toMatch(path)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
