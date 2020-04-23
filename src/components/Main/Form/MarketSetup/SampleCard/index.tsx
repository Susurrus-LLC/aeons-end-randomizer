import React from 'react'

import './sample-card.sass'

const SampleCard = props => {
  const card = JSON.parse(props.card)

  const cost = () => {
    switch (card.comp) {
      case 'any':
        return card.comp
      case '=':
        return `${card.cost}æ`
      case '><':
        return `${card.cost}/${card.costHigh}æ`
      case '<=':
        return `≤${card.cost}æ`
      case '>=':
        return `≥${card.cost}æ`
      default:
        return `${card.comp}${card.cost}æ`
    }
  }

  return (
    <div
      id={`card-${props.index}`}
      className={card.type ? `sample-card ${card.type}` : 'sample-card'}
    >
      <p className='card-text card-type'>{card.type}</p>
      <p className='card-text card-cost'>{cost()}</p>
    </div>
  )
}

export default SampleCard
