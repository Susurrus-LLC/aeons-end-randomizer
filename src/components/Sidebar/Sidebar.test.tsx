import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from '.'

describe('Sidebar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <Sidebar />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
