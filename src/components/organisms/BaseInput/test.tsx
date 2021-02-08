import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Formik } from 'formik'

import { BaseInput } from '.'

describe('<BaseInput />', () => {
  it('should renders correct <BaseInput />', () => {
    const wrapper = shallow(
      <Formik
        initialValues={{
          test: ''
        }}
        onSubmit={() => {}}
      >
        <BaseInput type="" name="" placeholder="" />
      </Formik>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
