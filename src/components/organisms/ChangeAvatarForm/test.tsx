import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ChangeAvatarForm } from '.'

describe('<ChangeAvatarForm />', () => {
  it('should renders correct <ChangeAvatarForm />', () => {
    const wrapper = shallow(<ChangeAvatarForm />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
