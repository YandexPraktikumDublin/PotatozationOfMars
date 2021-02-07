import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { TumblerTheme } from '.'

describe('<TumblerTheme />', () => {
  const darkThemeClass = 'dark'

  it('should renders correct <TumblerTheme />', () => {
    const wrapper = shallow(<TumblerTheme />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should toggle theme', () => {
    const wrapper = mount(<TumblerTheme />)

    expect(wrapper.find('img').prop('style')).toEqual({
      top: 'calc(50% - 12.5px)',
      transform: 'translateX(-2px)'
    })

    expect(
      document.documentElement.classList.contains(darkThemeClass)
    ).toBeTruthy()

    wrapper.simulate('click')

    expect(wrapper.find('img').prop('style')).toEqual({
      top: 'calc(50% - 12.5px)',
      transform: 'translateX(100%)'
    })

    expect(
      document.documentElement.classList.contains(darkThemeClass)
    ).toBeFalsy()

    wrapper.simulate('click')

    expect(wrapper.find('img').prop('style')).toEqual({
      top: 'calc(50% - 12.5px)',
      transform: 'translateX(-2px)'
    })

    expect(
      document.documentElement.classList.contains(darkThemeClass)
    ).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
