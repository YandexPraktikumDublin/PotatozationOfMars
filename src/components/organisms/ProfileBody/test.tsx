import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { ProfileBody } from '.'

const mockStore = configureStore([])

describe('<ProfileBody />', () => {
  let store: Store

  const initialState = {
    user: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <ProfileBody />', () => {
    const togglePasswordForm = jest.fn()
    const toggleThemeForm = jest.fn()

    const wrapper = shallow(
      <Provider store={store}>
        <ProfileBody
          togglePasswordForm={togglePasswordForm}
          toggleThemeForm={toggleThemeForm}
        />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
