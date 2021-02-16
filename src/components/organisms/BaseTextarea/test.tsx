import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Formik } from 'formik'

import { BaseTextarea } from '.'

describe('<BaseTextarea />', () => {
  const initialValues = { test: '' }
  const name = 'test_name'
  const placeholder = 'Test placeholder'

  it('should renders correct <BaseTextarea />', () => {
    const onSubmit = jest.fn()

    const wrapper = shallow(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <BaseTextarea name={name} placeholder={placeholder} />
      </Formik>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
