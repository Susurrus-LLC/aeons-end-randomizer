import React from 'react'
import ReactDOM from 'react-dom'

import MarketSetup from '.'
import Markets from '../../../../data/marketTemplates.json'

describe('Market Setup', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MarketSetup
        selected={Markets[0].name}
        setSelected={jest.fn(val => val)}
        market={Markets[0]}
        setMarket={jest.fn(val => val)}
        markets={Markets}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
