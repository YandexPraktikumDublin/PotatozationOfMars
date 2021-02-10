import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfilePasswordForm } from '.'

describe('<ProfilePasswordForm />', () => {
  it('should renders correct <ProfilePasswordForm />', () => {
    const wrapper = shallow(<ProfilePasswordForm />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
