import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { CreateTopicForm } from '.'

const mockStore = configureStore([])

describe('<CreateTopicForm />', () => {
  let store: Store

  const initialState = {}

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should renders correct <CreateTopicForm />', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CreateTopicForm />
      </Provider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
