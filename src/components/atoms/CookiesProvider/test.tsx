import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CookiesProvider } from '.'

describe('<CookiesProvider />', () => {
  it('should renders correct <CookiesProvider />', () => {
    const wrapper = shallow(
      <CookiesProvider manager={() => console.log()}>
        <></>
      </CookiesProvider>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
