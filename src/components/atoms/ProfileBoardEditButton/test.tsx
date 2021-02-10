import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfileBoardEditButton } from '.'

describe('<ProfileBoardEditButton />', () => {
  it('should renders correct <ProfileBoardEditButton />', () => {
    const onClick = jest.fn()

    const wrapper = shallow(<ProfileBoardEditButton onClick={onClick} />)

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
