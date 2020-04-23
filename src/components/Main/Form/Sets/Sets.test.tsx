import React from 'react'
import ReactDOM from 'react-dom'

import Sets from '.'

describe('Sets', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sets />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
