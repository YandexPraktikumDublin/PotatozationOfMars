import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ActionsListItem } from '.'

describe('<ActionsListItem />', () => {
  it('should renders correct <ActionsListItem />', () => {
    const name = 'Test name'
    const onClick = jest.fn()

    const wrapper = shallow(<ActionsListItem name={name} onClick={onClick} />)

    expect(wrapper.contains(name)).toBeTruthy()

    wrapper.find('button').simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
