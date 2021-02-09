import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { BaseForm } from '.'

describe('<BaseForm />', () => {
  it('should renders correct <BaseForm />', () => {
    const test = {
      email: '',
      login: '',
      firstName: '',
      lastName: '',
      phone: '',
      password: ''
    }
    const wrapper = shallow(
      <BaseForm
        schema={test}
        initialValues={test}
        onSubmit={() => console.log()}
        textButton="test"
      />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
