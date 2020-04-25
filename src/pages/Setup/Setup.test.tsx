import React from 'react'
import ReactDOM from 'react-dom'

import Setup from '.'

describe('Setup page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Setup />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
