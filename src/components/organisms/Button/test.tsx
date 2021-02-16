import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Button } from '.'

describe('<Button />', () => {
  it('should renders correct <Button />', () => {
    const children = 'test'

    const wrapper = shallow(<Button>{children}</Button>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should be full width by default', () => {
    const children = 'test'

    const wrapper = shallow(<Button>{children}</Button>)

    expect(wrapper.prop('className')).toContain('w-full')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should not be full width when isFullWidth prop is false', () => {
    const children = 'test'

    const wrapper = shallow(<Button isFullWidth={false}>{children}</Button>)

    expect(wrapper.prop('className')).not.toContain('w-full')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
