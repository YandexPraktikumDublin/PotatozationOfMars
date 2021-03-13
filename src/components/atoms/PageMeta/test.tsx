import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PageMeta } from '.'

describe('<PageMeta />', () => {
  it('should renders correct <PageMeta />', () => {
    const wrapper = shallow(<PageMeta />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
