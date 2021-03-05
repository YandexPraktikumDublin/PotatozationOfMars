import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { SignUpForm } from '.'

const mockStore = configureStore([])

describe('<SignUpForm />', () => {
  let store: Store

  const initialState = {
    user: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <SignUpForm />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
