import React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { ProfilePasswordForm } from '.'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('<ProfilePasswordForm />', () => {
  let store: Store

  const successCallback = jest.fn()

  const initialState = {
    user: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <ProfilePasswordForm />', () => {

    const wrapper = shallow(
      <Provider store={store}>
        <ProfilePasswordForm successCallback={successCallback} />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
