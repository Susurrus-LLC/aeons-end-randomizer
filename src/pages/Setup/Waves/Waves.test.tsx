import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import data from '../../../data'

import Waves from '.'

const DEFAULTDATA = data.DEFAULTDATA

describe('Waves page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <Waves data={DEFAULTDATA} setData={() => DEFAULTDATA} />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
