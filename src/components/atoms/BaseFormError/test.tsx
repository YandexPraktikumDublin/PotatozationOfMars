import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { BaseFormError } from '.'

describe('<BaseFormError />', () => {
  const children = 'Test children'

  it('should renders correct <BaseFormError />', () => {
    const wrapper = shallow(<BaseFormError>{children}</BaseFormError>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
