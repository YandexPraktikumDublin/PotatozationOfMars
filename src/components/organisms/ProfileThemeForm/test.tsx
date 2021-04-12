import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { ProfileThemeForm } from '.'

const mockStore = configureStore([])

describe('<ProfileThemeForm />', () => {
  let store: Store

  const initialState = {
    userSettings: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <ProfileThemeForm />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProfileThemeForm />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
