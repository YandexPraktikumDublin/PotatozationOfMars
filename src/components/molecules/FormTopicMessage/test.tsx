import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FormTopicMessage } from '.'

describe('<FormTopicMessage />', () => {
  const body = 'Test body'
  const userName = 'Ivan Ivanov'
  const date = '12.02.20'

  it('should renders correct <FormTopicMessage />', () => {
    const wrapper = shallow(
      <FormTopicMessage body={body} userName={userName} date={date} />
    )

    expect(wrapper.contains(body)).toBeTruthy()
    expect(wrapper.contains(userName)).toBeTruthy()
    expect(wrapper.contains(date)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
