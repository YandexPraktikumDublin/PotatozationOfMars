import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { NameValueList } from '.'

describe('<NameValueList />', () => {
  const children = 'Test children'

  it('should renders correct <NameValueList />', () => {
    const wrapper = shallow(<NameValueList>{children}</NameValueList>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
