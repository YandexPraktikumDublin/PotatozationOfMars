import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { NameValueListItem } from '.'

describe('<NameValueListItem />', () => {
  const name = 'Test name'
  const value = 'Test value'

  it('should renders correct <NameValueListItem />', () => {
    const wrapper = shallow(<NameValueListItem name={name} value={value} />)

    expect(wrapper.contains(name)).toBeTruthy()
    expect(wrapper.contains(value)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
