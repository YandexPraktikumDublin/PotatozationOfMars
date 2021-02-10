import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { List } from '.'

describe('<List />', () => {
  const children = 'Test children'

  it('should renders correct <List />', () => {
    const wrapper = shallow(<List>{children}</List>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from className prop', () => {
    const className = 'test-class-name'

    const wrapper = shallow(<List className={className}>{children}</List>)

    expect(wrapper.prop('className')).toMatch(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
