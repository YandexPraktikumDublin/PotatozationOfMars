import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { TopicMessageForm } from '.'

describe('<TopicMessageForm />', () => {
  it('should renders correct <TopicMessageForm />', () => {
    const wrapper = shallow(<TopicMessageForm />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
