import React from 'react'
import ReactDOM from 'react-dom'

import ButtonLink from '.'

describe('ButtonLink', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ButtonLink />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
