import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { FeedbackForm } from '.'

const mockStore = configureStore([])

describe('<FeedbackForm />', () => {
  let store: Store

  const initialState = {
    feedback: {}
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <FeedbackForm />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <FeedbackForm />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
