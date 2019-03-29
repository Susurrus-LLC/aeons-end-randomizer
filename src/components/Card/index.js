import React from 'react'

import './card.sass'

const Card = props => {
  const card = JSON.parse(props.card)

  const cost = () => {
    switch (card.comp) {
      case 'any':
        return card.comp
      case '=':
        return card.cost
      case '><':
        return `${card.cost}/${card.costHigh}`
      case '<=':
        return `≤${card.cost}`
      case '>=':
        return `≥${card.cost}`
      default:
        return card.comp + card.cost
    }
  }

  return (
    <div
      id={`card-${props.index}`}
      className={card.type ? `card ${card.type}` : 'card'}
    >
      <p className='card-text card-type'>{card.type}</p>
      <p className='card-text card-cost'>{cost()}</p>
    </div>
  )
}

export default Card
