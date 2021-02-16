import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CloseButton } from '.'

describe('<CloseButton />', () => {
  it('should renders correct <CloseButton />', () => {
    const onClick = jest.fn()

    const wrapper = shallow(<CloseButton onClick={onClick} />)

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from className prop', () => {
    const onClick = jest.fn()
    const className = 'test-class-name'

    const wrapper = shallow(
      <CloseButton onClick={onClick} className={className} />
    )

    expect(wrapper.prop('className')).toMatch(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
