import React from 'react'
import ReactDOM from 'react-dom'
import Submit from './'

describe('Submit', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Submit />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
