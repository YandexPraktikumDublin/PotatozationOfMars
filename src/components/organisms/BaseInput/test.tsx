import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Formik } from 'formik'

import { BaseInput } from '.'

describe('<BaseInput />', () => {
  const initialValues = { test: '' }
  const onSubmit = jest.fn()
  const type = 'text'
  const name = 'test_name'
  const placeholder = 'Test placeholder'

  it('should renders correct <BaseInput />', () => {
    const wrapper = shallow(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <BaseInput type={type} name={name} placeholder={placeholder} />
      </Formik>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
