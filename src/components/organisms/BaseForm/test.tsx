import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { BaseForm } from '.'

describe('<BaseForm />', () => {
  it('should renders correct <BaseForm />', () => {
    const children = 'Test children'
    const validationSchema = {}
    const initialValues = { login: '', password: '' }
    const buttonText = 'Test text'
    const onSubmit = jest.fn()

    const wrapper = shallow(
      <BaseForm
        initialValues={validationSchema}
        validationSchema={initialValues}
        onSubmit={onSubmit}
        buttonText={buttonText}
      >
        {children}
      </BaseForm>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
