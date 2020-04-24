import React from 'react'

import styles from './sample-card.module.sass'

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
      className={card.type ? `${styles.sampleCard} ${card.type}` : styles.sampleCard}
    >
      <p className={`${styles.cardText} ${styles.cardType}`}>{card.type}</p>
      <p className={`${styles.cardText} ${styles.cardCost}`}>{cost()}</p>
    </div>
  )
}

export default SampleCard
