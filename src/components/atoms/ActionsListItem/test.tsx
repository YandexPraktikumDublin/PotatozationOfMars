import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ActionsListItem } from '.'

describe('<ActionsListItem />', () => {
  const name = 'Test name'

  it('should renders correct <ActionsListItem />', () => {
    const onClick = jest.fn()

    const wrapper = shallow(<ActionsListItem name={name} onClick={onClick} />)

    expect(wrapper.contains(name)).toBeTruthy()

    wrapper.find('button').simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct value from value prop', () => {
    const onClick = jest.fn()

    const value = 'Test value'

    const wrapper = shallow(
      <ActionsListItem name={name} value={value} onClick={onClick} />
    )

    expect(wrapper.contains(value)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
