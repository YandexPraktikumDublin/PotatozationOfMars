import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfileBoardBackButton } from '.'

describe('<ProfileBoardBackButton />', () => {
  it('should renders correct <ProfileBoardBackButton />', () => {
    const onClick = jest.fn()

    const wrapper = shallow(<ProfileBoardBackButton onClick={onClick} />)

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
