import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CreateTopicForm } from '.'

describe('<CreateTopicForm />', () => {
  it('should renders correct <CreateTopicForm />', () => {
    const wrapper = shallow(<CreateTopicForm />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
