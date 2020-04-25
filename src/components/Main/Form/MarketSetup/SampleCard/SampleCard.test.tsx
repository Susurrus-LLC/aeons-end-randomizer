import React from 'react'
import ReactDOM from 'react-dom'

import SampleCard from '.'
import Data from '../../../../../data'

const cards = Data.cards

describe('Sample Card', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SampleCard card={JSON.stringify(cards[0])} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
