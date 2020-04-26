import React from 'react'

import data, { Data } from '../../../data'

import Page from '../../../components/Page'
import SetCard from '../../../components/SetCard'

import styles from './sets.module.sass'

type PropTypes = {
  data: Data
  setData: Function
}

const Sets = (props: PropTypes) => {
  const listSets = () =>
    data.SETS.map(set => (
      <SetCard
        key={set.code}
        set={set}
        data={props.data}
        setData={props.setData}
        base={set.code === set.wave}
        promo={set.code === 'PM'}
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
