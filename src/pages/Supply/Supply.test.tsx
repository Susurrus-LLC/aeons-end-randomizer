import React from 'react'
import ReactDOM from 'react-dom'

import Supply from '.'

describe('Supply page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Supply />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
