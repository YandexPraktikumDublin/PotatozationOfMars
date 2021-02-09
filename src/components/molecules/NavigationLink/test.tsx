import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { NavigationLink } from '.'

describe('<NavigationLink />', () => {
  const title = 'Test title'
  const href = '/test'
  const imageSrc = 'image.jpg'

  it('should renders correct <NavigationLink />', () => {
    const wrapper = shallow(
      <NavigationLink title={title} href={href} imageSrc={imageSrc} />
    )

    expect(wrapper.prop('to')).toMatch(href)
    expect(wrapper.prop('title')).toMatch(title)
    expect(wrapper.find('img').prop('src')).toMatch(imageSrc)
    expect(wrapper.find('img').prop('alt')).toMatch(title)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
