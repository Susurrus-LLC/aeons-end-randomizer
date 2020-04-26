import React from 'react'

import data, { Data, Set, Selection } from '../../../data'

import Page from '../../../components/Page'
import SetCard from '../../../components/SetCard'

import styles from './sets.module.sass'

type PropTypes = {
  data: Data
  setData: Function
}

const Sets = (props: PropTypes) => {
  const checkSelected = (set: Set | 'all', wave: Boolean): Selection => {
    let checkCards: Boolean = true
    let i = 0
    const cards =
      set === 'all'
        ? data.CARDS
        : wave
        ? data.CARDS.filter(card => card.set === set.wave)
        : data.CARDS.filter(card => card.set === set.set)
    while (checkCards && i < cards.length) {
      checkCards = props.data.availableCards.includes(cards[i])
      i++
    }

    let checkMages: Boolean = true
    i = 0
    const mages =
      set === 'all'
        ? data.MAGES
        : wave
        ? data.MAGES.filter(mage => mage.set === set.wave)
        : data.MAGES.filter(mage => mage.set === set.set)
    while (checkMages && i < mages.length) {
      checkMages = props.data.availableMages.includes(mages[i])
      i++
    }

    let checkNemeses: Boolean = true
    i = 0
    const nemeses =
      set === 'all'
        ? data.NEMESES
        : wave
        ? data.NEMESES.filter(nemesis => nemesis.set === set.wave)
        : data.NEMESES.filter(nemesis => nemesis.set === set.set)
    while (checkNemeses && i < nemeses.length) {
      checkNemeses = props.data.availableNemeses.includes(nemeses[i])
      i++
    }

    if (checkCards && checkMages && checkNemeses) {
      return 'all'
    } else if (!checkCards && !checkMages && !checkNemeses) {
      return 'none'
    } else {
      return 'partial'
    }
  }

  const listSets = () =>
    data.SETS.map(set => (
      <SetCard
        key={set.code}
        set={set}
        data={props.data}
        setData={props.setData}
        base={set.code === set.wave}
        promo={set.code === 'PM'}
        checkSelected={checkSelected}
      />
    ))

  return (
    <Page>
      <p>select all content</p>
      <div className={styles.cardsArea}>{listSets()}</div>
    </Page>
  )
}

export default Sets
