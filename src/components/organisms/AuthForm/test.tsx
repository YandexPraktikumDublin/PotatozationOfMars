import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { AuthForm } from '.'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('<AuthForm />', () => {
  let store: Store

  const initialState = {
    user: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <AuthForm />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AuthForm />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
