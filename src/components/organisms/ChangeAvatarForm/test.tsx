import React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { ChangeAvatarForm } from '.'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('<ChangeAvatarForm />', () => {
  let store: Store
  const successCallback = jest.fn()

  const initialState = {
    user: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <ChangeAvatarForm />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ChangeAvatarForm successCallback={successCallback} />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
