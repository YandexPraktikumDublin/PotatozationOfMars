import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Formik } from 'formik'

import { BaseSelect } from '.'

describe('<BaseSelect />', () => {
  const initialValues = { test: '' }
  const name = 'test_name'

  it('should renders correct <BaseSelect />', () => {
    const onSubmit = jest.fn()

    const wrapper = shallow(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <BaseSelect name={name}>
          <option />
        </BaseSelect>
      </Formik>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
