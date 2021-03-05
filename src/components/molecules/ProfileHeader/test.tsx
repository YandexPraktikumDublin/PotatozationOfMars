import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { ProfileHeader } from '.'

const mockStore = configureStore([])

describe('<ProfileHeader />', () => {
  let store: Store

  const initialState = {
    user: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <ProfileHeader />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProfileHeader />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from className prop', () => {
    const className = 'test-class-name'

    const wrapper = mount(
      <Provider store={store}>
        <ProfileHeader className={className} />
      </Provider>
    )

    expect(wrapper.find('header').prop('className')).toMatch(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
