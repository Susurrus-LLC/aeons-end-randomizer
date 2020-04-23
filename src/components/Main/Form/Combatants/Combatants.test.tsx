import React from 'react'
import ReactDOM from 'react-dom'

import Combatants from '.'

describe('Combatants', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Combatants />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
