import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { EditButton } from '.'

describe('<EditButton />', () => {
  it('should renders correct <EditButton />', () => {
    const onClick = jest.fn()

    const wrapper = shallow(<EditButton onClick={onClick} />)

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from className prop', () => {
    const onClick = jest.fn()
    const className = 'test-class-name'

    const wrapper = shallow(
      <EditButton onClick={onClick} className={className} />
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
