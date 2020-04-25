import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import data from '../../../../../data'

import Customization from '.'

const DEFAULTDATA = data.DEFAULTDATA

describe('Customization page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <Customization data={DEFAULTDATA} setData={() => DEFAULTDATA} />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
