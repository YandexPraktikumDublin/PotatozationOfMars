import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom'

import { Header } from '.'

describe('<Header />', () => {
  it('should renders correct <Header />', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
