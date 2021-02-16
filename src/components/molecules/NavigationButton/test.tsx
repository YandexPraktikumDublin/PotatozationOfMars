import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { NavigationButton } from '.'

describe('<NavigationButton />', () => {
  const title = 'Test title'
  const imageSrc = 'image.jpg'

  it('should renders correct <NavigationButton />', () => {
    const handleButtonClick = jest.fn()

    const wrapper = shallow(
      <NavigationButton
        title={title}
        onClick={handleButtonClick}
        imageSrc={imageSrc}
      />
    )

    expect(wrapper.prop('title')).toContain(title)
    expect(wrapper.find('img').prop('src')).toContain(imageSrc)
    expect(wrapper.find('img').prop('alt')).toContain(title)

    wrapper.simulate('click')

    expect(handleButtonClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
