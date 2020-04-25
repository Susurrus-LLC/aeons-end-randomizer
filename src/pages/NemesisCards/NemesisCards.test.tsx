import React from 'react'
import ReactDOM from 'react-dom'

import NemesisCards from '.'

describe('Nemesis Cards page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NemesisCards />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
