import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Formik } from 'formik'

import { BaseFileInput } from '.'

describe('<BaseFileInput />', () => {
  const initialValues = { test: '' }
  const name = 'test_name'

  it('should renders correct <BaseFileInput />', () => {
    const onSubmit = jest.fn()

    const wrapper = shallow(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <BaseFileInput name={name} />
      </Formik>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
