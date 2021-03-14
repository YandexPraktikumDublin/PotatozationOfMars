import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CookiesContext } from '.'

describe('<CookiesContext />', () => {
  it('should renders correct <CookiesContext />', () => {
    const wrapper = shallow(
      <CookiesContext.Consumer>{() => <></>}</CookiesContext.Consumer>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
