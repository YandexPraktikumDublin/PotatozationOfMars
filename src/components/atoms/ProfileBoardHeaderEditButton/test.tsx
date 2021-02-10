import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProfileBoardHeaderEditButton } from '.'

describe('<ProfileBoardHeaderEditButton />', () => {
  it('should renders correct <ProfileBoardHeaderEditButton />', () => {
    const onClick = jest.fn()

    const wrapper = shallow(<ProfileBoardHeaderEditButton onClick={onClick} />)

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
