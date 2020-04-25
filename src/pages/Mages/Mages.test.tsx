import React from 'react'
import ReactDOM from 'react-dom'

import Mages from '.'

describe('Mages page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Mages />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
