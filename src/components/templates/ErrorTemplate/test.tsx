import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ErrorTemplate } from '.'

describe('<ErrorTemplate />', () => {
  const title = 'Test title'

  it('should renders correct <ErrorTemplate />', () => {
    const wrapper = shallow(<ErrorTemplate title={title} />)

    expect(wrapper.contains(title)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
