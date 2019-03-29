import React, { useState, useEffect } from 'react'

import Markets from '../../data/marketTemplates.json'

import Card from '../Card'

import './marketsetup.sass'

const MarketSetup = () => {
  const [selected, setSelection] = useState(Markets[0].name)
  const [market, setMarket] = useState(Markets[0])

  useEffect(() => {
    setMarket(Markets.find(m => m.name === selected))
  })

  const setOptions = () => Markets.map(mkt => (
    <option value={mkt.name} key={mkt.name}>
      {mkt.name}
    </option>
  ))

  const cards = () => {
    let arr = []
    for (let i = 1; i <= 9; i++) {
      arr.push(market[`card${i}`])
    }
    return arr
  }

  const displayCards = () => cards().map((crd, i) => (
    <Card
      card={JSON.stringify(crd)}
      index={i + 1}
      key={i}
    />
  ))

  return (
    <div className='market-setup'>
      <select
        id='market-setup'
        name='market-setup'
        onChange={e => setSelection(e.target.value)}
        selected={selected}
        defaultValue={Markets[0].name}
      >
        {setOptions()}
      </select>
      <div className='setup-grid'>
        {displayCards()}
      </div>
    </div>
  )
}

export default MarketSetup
