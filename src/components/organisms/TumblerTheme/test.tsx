import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { TumblerTheme } from '.'

const mockStore = configureStore([])

describe('<TumblerTheme />', () => {
  const darkThemeClass = 'dark'

  const userSettings = {
    isDarkModeEnabled: true
  }

  let store: Store

  const initialState = {
    userSettings
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <TumblerTheme />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <TumblerTheme />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should toggle theme', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TumblerTheme />
      </Provider>
    )

    expect(wrapper.find('img').prop('style')).toEqual({
      display: 'block',
      top: 'calc(50% - 0.75rem)',
      transform: 'translateX(-2px)'
    })

    expect(
      document.documentElement.classList.contains(darkThemeClass)
    ).toBeTruthy()

    wrapper.simulate('click')

    expect(wrapper.find('img').prop('style')).toEqual({
      display: 'block',
      top: 'calc(50% - 0.75rem)',
      transform: 'translateX(100%)'
    })

    expect(
      document.documentElement.classList.contains(darkThemeClass)
    ).toBeFalsy()

    wrapper.simulate('click')

    expect(wrapper.find('img').prop('style')).toEqual({
      display: 'block',
      top: 'calc(50% - 0.75rem)',
      transform: 'translateX(-2px)'
    })

    expect(
      document.documentElement.classList.contains(darkThemeClass)
    ).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
