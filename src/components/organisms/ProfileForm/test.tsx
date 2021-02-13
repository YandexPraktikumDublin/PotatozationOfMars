import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfileForm } from '.'

describe('<ProfileForm />', () => {
  it('should renders correct <ProfileForm />', () => {
    const wrapper = shallow(<ProfileForm />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
