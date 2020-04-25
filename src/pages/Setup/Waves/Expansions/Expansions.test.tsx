import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import data from '../../../../data'

import Expansions from '.'

const DEFAULTDATA = data.DEFAULTDATA

describe('Expansions page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <Expansions data={DEFAULTDATA} setData={() => DEFAULTDATA} />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
