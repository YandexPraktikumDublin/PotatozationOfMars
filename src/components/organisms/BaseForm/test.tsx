import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { BaseForm } from '.'

describe('<BaseForm />', () => {
  it('should renders correct <BaseForm />', () => {
    const wrapper = shallow(<BaseForm />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
