import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { ChangeAvatarForm } from '.'

const mockStore = configureStore([])

describe('<ChangeAvatarForm />', () => {
  let store: Store

  const initialState = {
    user: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <ChangeAvatarForm />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ChangeAvatarForm />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
