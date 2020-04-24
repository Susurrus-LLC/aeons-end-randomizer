import React, { useEffect } from 'react'

import SampleCard from './SampleCard'

import styles from './marketsetup.module.sass'

const MarketSetup = props => {
  useEffect(() => {
    props.setMarket(props.markets.find(m => m.name === props.selected))
  })

  const setOptions = () => props.markets.map(mkt => (
    <option value={mkt.name} key={mkt.name}>
      {mkt.name}
    </option>
  ))

  const cards = () => {
    let arr = []
    for (let i = 1; i <= 9; i++) {
      arr.push(props.market[`card${i}`])
    }
    return arr
  }

  const displayCards = () => cards().map((crd, i) => (
    <SampleCard
      card={JSON.stringify(crd)}
      index={i + 1}
      key={i}
    />
  ))

  return (
    <div className={styles.marketSetup}>
      <select
        id='market-setup'
        name='market-setup'
        onChange={e => props.setSelected(e.target.value)}
        selected={props.selected}
        defaultValue={props.markets[0].name}
      >
        {setOptions()}
      </select>
      <div className={styles.setupGrid}>
        {displayCards()}
      </div>
    </div>
  )
}

export default MarketSetup
