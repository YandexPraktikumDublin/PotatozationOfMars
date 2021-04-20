import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { Footer } from '.'

const mockStore = configureStore([])

describe('<Footer />', () => {
  let store: Store

  const initialState = {
    feedback: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <Footer />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Footer />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
